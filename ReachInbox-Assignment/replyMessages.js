const interestedHtmlResponse = `
    <p>Hello , </p>
    <p>I'm glad to hear that I am interested in the Give Post. Let's move forward with the next steps.</p>
    <p>Could you please suggest a suitable time for a demo call or meeting  to discuss further details? </p>
    <h4>Looking forward to connecting with you soon!</h4>
    <p>Best regards,</p>
    <p>Padmavathi Kondeti  </p>
`

const notInterestedHtmlResponse = `
    <p>Hello , </p>
    <p>Thank you for your email. I appreciate you taking the time to reach out.</p>
    <p>However, at this time, I'm not interested in pursuing further discussions. </p>
    <p>Kind regards,</p>
    <p>Padmavathi Kondeti  </p>
`

const meetingBookedHtmlResponse = `
    <p>Hello , </p>
    <p>Thank you for your Meeting details. I'm happy to gain extra information about the post.</p>
    <h4>Looking forward to assisting you further!\</h4>
    <p>Best regards,</p>
    <p>Padmavathi Kondeti  </p>
`

const spamHtmlResponse = `
    <p>Hello , </p>
    <p>Thank you for your email. I'm happy to gain extra information about the post details.</p>
    <h4>Looking forward to further discussion</h4>
    <p>Best regards,</p>
    <p>Padmavathi Kondeti  </p>
`

const outOfOfficeHtmlResponse = `
    <p>Hello , </p>
    <p>Thank you for your message. I am out of the office from 01/10/2025 to 06/10/2025 with limited access to email. </p>
    <p>I will respond to your message as soon as possible upon my return. </p>
    <h4>For urgent assistance, please contact me on my Personal number</h4>
    <p>Best regards,</p>
    <p>Padmavathi Kondeti  </p>
`

const interestedHtmlInterestReply = `
    <p>Hello , </p>
    <p>Thank you for your interest! Would you be available for a demo call?.</p>
    <p>Please suggest a time that works for you. </p>
    <h4>Looking forward to connecting with you soon!</h4>
    <p>Best regards,</p>
    <p>Product Team ReachInBox  </p>
`

const notInterestedHtmlInterestReply = `
    <p>Hello , </p>
    <p>Thank you for considering our product. If you have any further questions in the future, feel free to reach out.</p>
    <h4>Looking forward to connecting with you soon!</h4>
    <p>Best regards,</p>
    <p>Product Team ReachInBox  </p>
`

const meetingBookedHtmlInterestReply = `
    <p>Hello , </p>
    <p>Thank you for reaching out. We will meet you on coming Tuesday. </p>
    <h4>Looking forward to connecting with you on Tuesday!</h4>
    <p>Best regards,</p>
    <p>Product Team ReachInBox  </p>
`

const spamHtmlInterestReply = `
    <p>Hello , </p>
    <p>Thank you for reaching out. We will getback to you as soon as possible. </p>
    <h4>Looking forward to connecting with you soon..!</h4>
    <p>Best regards,</p>
    <p>Product Team ReachInBox  </p>
`

const outOfOfficeHtmlInterestReply = `
    <p>Hello , </p>
    <p>Thank you for your message. I am out of the office from 01/10/2025 to 06/10/2025 with limited access to email. </p>
    <p>I will respond to your message as soon as possible upon my return. </p>
    <p>Best regards,</p>
    <p>Product Team ReachInBox  </p>
`

module.exports = {
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
}
