const {
  interestedHtmlResponse,
  notInterestedHtmlResponse,
  meetingBookedHtmlResponse,
  spamHtmlResponse,
  outOfOfficeHtmlResponse,
  interestedHtmlInterestReply,
  notInterestedHtmlInterestReply,
  meetingBookedHtmlInterestReply,
  spamHtmlInterestReply,
  outOfOfficeHtmlInterestReply,
} = require('./replyMessages')

// Function to generate automated reply based on category
const generateReply = category => {
  switch (category) {
    case 'Interested':
      return interestedHtmlInterestReply
    case 'Not Interested':
      return notInterestedHtmlInterestReply
    case 'Meeting Booked':
      return meetingBookedHtmlInterestReply
    case 'Spam':
      return spamHtmlInterestReply
    case 'Out of Office':
      return outOfOfficeHtmlInterestReply
    default:
      return `Thank you for your email. We'll get back to you.Looking forward to connecting with you soon!`
  }
}

// Function to generate automated reply based on category
const generateReplyForEmails = category => {
  switch (category) {
    case 'Interested':
      return interestedHtmlResponse
    case 'Not Interested':
      return notInterestedHtmlResponse
    case 'Meeting Booked':
      return meetingBookedHtmlResponse
    case 'Spam':
      return spamHtmlResponse
    case 'Out of Office':
      return outOfOfficeHtmlResponse
    default:
      return `Thank you for your email. We'll get back to you.`
  }
}

module.exports = {generateReply, generateReplyForEmails}
