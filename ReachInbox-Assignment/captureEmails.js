const {sendMailReplies} = require('./emailSend')
const {OpenAI} = require('openai')

const apiKey = process.env.OPENAI_API_KEY

const openai = new OpenAI({apiKey: apiKey})

const promptForReadEmails = `
You will serve as an ATS  and I will be send you gmail context. You have to assess to the read the gmail context analyse them and  understand the context and on the basis of below criteria give the response. 

Filtering Criteria:  emails containing job offers or opportunities matching certain criteria:

Job Titles: Full-stack web developer, software developer, software engineer.
Location: India.
Response Mechanism:
If the email matches the specified criteria, the AI responds with "interested."
If the email contains information about Meeting details, the AI responds with "Meeting Booked."
If the email contains unsolicited, unwanted, and often commercial or fraudulent bulk email sent to a large number of recipients, the AI responds with "Spam."
If the email doesn't meet any of the specified criteria, the AI responds with "not interested."
If the email contains the sender that the recipient is temporarily unavailable, the AI responds with "Out of Office."`

const captureEmails = async (gmail, messages, index) => {
  try {
    const messageId = messages.data.messages[index].id
    const messageData = await gmail.users.messages.get({
      userId: 'me',
      id: messageId,
    })

    const headers = messageData.data.payload.headers

    // Find the 'From' header
    const fromHeader = headers.find(header => header.name === 'From')

    // Extract the sender email address from the 'From' header
    const senderEmail = fromHeader.value

    const fromHeaderSubject = headers.find(header => header.name === 'Subject')

    const senderSebject = fromHeaderSubject.value

    const emailSnippet = messageData.data

    const response = checkEmailContent(emailSnippet.snippet)
    // console.log(response)

    sendMailReplies(
      'padma.kondeti227@gmail.com',
      senderEmail,
      senderSebject,
      response,
    )
    if (response === 'Interested') {
      // await addLabel(gmail, messageId, "interested");
      await addLabel(gmail, messageId, 'INTERESTED')
    } else if (response === 'Meeting Booked') {
      // await addLabel(gmail, messageId, "Meeting Booked");
      await addLabel(gmail, messageId, 'MEETING_BOOKED')
    } else if (response === 'Not Interested') {
      // await addLabel(gmail ,messageId, "Not Interested");
      await addLabel(gmail, messageId, 'NOT_INTERESTED')
    } else if (response === 'Spam') {
      // await addLabel(gmail ,messageId, "Spam");
      await addLabel(gmail, messageId, 'SPAM')
    } else {
      // await addLabel(gmail ,messageId, "Out of Office");
      await addLabel(gmail, messageId, 'OUT_OF_OFFICE')
    }
  } catch (err) {
    console.log(err)
  }
}
const getEmails = async (gmail, messages) => {
  try {
    // categories only first 10 mails for learning
    for (let i = 0; i < 5; i++) {
      await captureEmails(gmail, messages, i)
    }
  } catch (err) {
    console.error('Error:', err)
  }
}

const checkEmailContent = content => {
  // Convert content to lowerCase
  content = content.toLowerCase()

  const interestedArr = ['developer', 'software', 'engineer']
  const meetingBookedArr = ['bookingTime', 'slotDetails', 'bookingDetails']
  const spamArr = ['job', 'class', 'study']
  const outOfOfficeArr = ['fromDate', 'toDate', 'availableMode']

  // Check for keywords indicating Interested
  if (interestedArr.some(keyword => content.includes(keyword))) {
    return 'Interested'
  }
  // Check for keywords indicating request for Meeting Booked
  else if (meetingBookedArr.some(keyword => content.includes(keyword))) {
    return 'Meeting Booked'
  }
  // Check for keywords indicating request for Spam
  else if (spamArr.some(keyword => content.includes(keyword))) {
    return 'Spam'
  }
  // Check for keywords indicating request for Out of Office
  else if (outOfOfficeArr.some(keyword => content.includes(keyword))) {
    return 'Out of Office'
  } else {
    return 'Not Interested'
  }
}

const addLabel = async (gmail, Id, label) => {
  const labelsResponse = await gmail.users.labels.list({userId: 'me'})
  //  console.log(labelsResponse.data.labels,"ALL LABELS");
  try {
    await gmail.users.messages.modify({
      userId: 'me',
      id: Id,
      resource: {
        addLabelIds: [label],
        removeLabelIds: ['INBOX'],
      },
    })
    console.log(`Label '${label}' added to email with ID: ${Id}`)
  } catch (err) {
    console.error(`Error adding label '${label}' to email with ID: ${Id}`, err)
  }
}

const analyzeEmail = async emailContent => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      prompt: emailContent,
      content: promptForReadEmails,
    })
    console.log(response, 'response')
    return response.data.choices[0].text.trim()
  } catch (error) {
    console.error('Error analyzing email:', error)
    throw error
  }
}

module.exports = {getEmails}
