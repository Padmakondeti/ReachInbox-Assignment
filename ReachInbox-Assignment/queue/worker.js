const {Worker} = require('bullmq')

const sendEmail = () =>
  new Promise((res, rej) => setTimeout(() => res(), 5 * 1000))

const worker = new Worker('email-noti', async job => {
  try {
    console.log('processing msg')
    await sendEmail()
    console.log(`msg id : ${job.id}`)
    console.log('email sent')
  } catch (err) {
    console.log(err)
  }
})
worker()
