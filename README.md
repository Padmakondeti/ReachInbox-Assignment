# ReachInbox-Assignment

Build a Feature-Rich Onebox for Emails.

# technologies used:
- Node.js
- Express.js
- OpenAI
- Google APIs
- Microsoft Graph API

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Overview
ReachInbox-Assignment is a project designed to showcase a feature-rich onebox for emails. It serves as an example of how to handle email data effectively with JavaScript.

## Features
- Email parsing and rendering
- JavaScript-driven functionality
- Modular and scalable design

## Installation setup
1. Clone the repository to your local machine
```bash
git clone https://github.com/Padmakondeti/ReachInbox-Assignment.git
```
2. Navigate to the root directory of the project directory :
```bash 
cd server
```
3. Run `npm install` to install all the dependencies
4. Create a `.env` file in the root directory with the same IDs as specified in the documentation.

## Running the server
1. To start the server, run the following command in your terminal
```bash
npm start
```
*This will start the server at localhost:9200 (or whatever port you have specified).*
or we can use backend deployed link also.

2. To start the worker.js file, run the following command in your terminal
```bash
npm run server
```

## API Endpoints

### For Google's OAuth2.0:
- `https://reachinbox-assignment.onrender.com/auth/google` - GET for google authentication
- `https://reachinbox-assignment.onrender.com/api/mail/userInfo/:email` - GET request to view user profile
- `https://reachinbox-assignment.onrender.com/api/mail/allDrafts/:email` - GET request to view all drafts mail.
- `https://reachinbox-assignment.onrender.com/api/mail/read/:email/message/:message` - GET request to read a specific email(using id).
- `https://reachinbox-assignment.onrender.com/api/mail/list/:email` - GET request to get a list of mails.
- `https://reachinbox-assignment.onrender.com/api/mail/sendMail` - POST request send mail with label.
```
{
    "from":"sendersmail@gmail.com",
    "to":"recieversmail@gmail.com",
    "label":"interested/not-interested/meeting-booked/spam/outofoffice"
}
```
- `https://reachinbox-assignment.onrender.com/api/mail/sendone/:id` - POST request to send a single mail for particular ID.
```
{
    "from":"sendersmail@gmail.com",
    "to":"recieversmail@gmail.com"
}
```
- - `https://reachinbox-assignment.onrender.com/api/mail/sendMultiple/:id` - POST request to send a single mail for particular ID.
 ```
{
    "from":"sendersmail@gmail.com",
    "to":["demo@gmail.com","demo@gmail.com", "demo@gmail.com"]
}
```

### For microsoft OAuth2.0:

- `https://reachinbox-assignment.onrender.com/outlook/signin` - GET for micosoft authentication for outlook
- `https://reachinbox-assignment.onrender.com/outlook/callbak` - GET for micosoft getting access token
- `https://reachinbox-assignment.onrender.com/outlook/profile` - GET request to get profile data for particular user
- `https://reachinbox-assignment.onrender.com/outlook/all-Mails/{email}` - GET request for get ist of all mails of outllok user
- `https://reachinbox-assignment.onrender.com/outlook/{email}/read-Msg/{:message}` = GET request to read partivcular mail using messange id
- `https://reachinbox-assignment.onrender.com/outlook/{email}/send-Mail` - post request for sending mail to another user using outlook
```
{
    "from":"sendersmail@gmail.com",
    "to":"recieversmail@gmail.com"
     "label":"interested/not-interested/meeting-booked/spam/outofoffice"
}
```
- `https://reachinbox-assignment.onrender.com/outlook/sendone/:email/:id` - post request for sending mail to another user using outlook using `bullmq`
```
{
    "from":"sendersmail@gmail.com",
    "to":"recieversmail@gmail.com"
}
## Contributing
Contributions are welcome! Feel free to fork the repository and submit your pull requests.

## License
This project currently does not have a license.
