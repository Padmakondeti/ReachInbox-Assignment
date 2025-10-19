const {Queue} = require('bullmq')

const notificationQueue = new Queue('email-noti')

async function init() {
  const res = await notificationQueue.add('email to padma', {
    email: 'xyz@gmail.com',
    subject: 'Welcome note',
    body: 'Welcome to rechinbox',
  })
  console.log('job add to queue', res.id)
}

init()
