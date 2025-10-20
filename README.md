# ReachInbox-Assignment

The assignment is to build a tool that will check and parse the emails in  multiple IMAP email accounts (like a Google and Outlook email ID) to access and manage several different email accounts from a single email client or application across various devices, and
respond to the e-mails based on the context using AI. Use BullMQ as the tasks scheduler
This is a server-based application built with Node.js and Express. It uses various packages such as  `openai` for AI functionalities, `googleapis` for Google APIs, and `axios` for HTTP requests and `bullMQ` to process queues.

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

## Getting Started <br/>
 
   <h2>Installation</h2>

   ### Run Frontend 
   
   Clone the repository:   ``` git clone https://github.com/Padmakondeti/ReachInbox-Assignment.git ``` <br/>
   Navigate to the project directory:   ``` cd reachinbox-onebox ``` <br/>
   Navigate to the project directory:   ``` cd frontend ``` <br/>
   Install the dependencies:   ``` npm install ``` <br/>
   Start the development server:   ``` npm run start ``` <br/>
   Open your browser and visit:   ``` http://localhost:3000 ``` <br/>

   ### Run Backend 
   
   Clone the repository:   ``` git clone https://github.com/Padmakondeti/ReachInbox-Assignment.git ``` <br/>
   Navigate to the project directory:   ``` cd reachinbox-onebox ``` <br/>
   Install the dependencies:   ``` npm install ``` <br/>
   Start the development server:   ``` npm run server ``` <br/>
   Open your browser and visit:   ``` http://localhost:9200 ``` <br/>
   
## Technologies Used

### 1. Node

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows for the execution of JavaScript code server-side.

### 2. Express

Express is a web application framework for Node.js. It simplifies the process of building web applications and APIs by providing a robust set of features.

### 3. React

React is a JavaScript library for building Ssamless UI. Its component-based architecture makes it easy to manage and organize UI elements, promoting reusability and maintainability.React Provide SOC ( Seperation of Concerns ) so we can separate our app.

### 4. Axios

Axios is a promise-based HTTP client for making asynchronous requests in JavaScript. It simplifies data fetching and handling HTTP responses, making it a reliable choice for API interactions in React applications.

### Demo Presentation Link :- https://ik.imagekit.io/kpwsmgijj/Editing%20ReachInbox-Assignment_README.md%20at%20main%20_%20Padmakondeti_ReachInbox-Assignment%20-%20Google%20Chrome%202025-10-20%2017-07-10.mp4?updatedAt=1760961401133

## Home Page

![Home Page](https://ik.imagekit.io/kpwsmgijj/Screenshot_20251020_122040_Chrome.jpg?updatedAt=1760955655746)

## After Login Categories mails Based on Label

![category](https://ik.imagekit.io/kpwsmgijj/Screenshot%202025-10-20%20153445.png?updatedAt=1760955640504)

![category name](https://ik.imagekit.io/kpwsmgijj/Screenshot%202025-10-20%20153227.png?updatedAt=1760955599821)

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
    "label":"interested/not-interested/meeting-booked/spam/out-of-office"
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
     "label":"interested/not-interested/meeting-booked/spam/out-of-office"
}
```
- `https://reachinbox-assignment.onrender.com/outlook/sendone/:email/:id` - post request for sending mail to another user using outlook using `bullmq`
```
{
    "from":"sendersmail@gmail.com",
    "to":"recieversmail@gmail.com"
}
```

## Contributing
Contributions are welcome! Feel free to fork the repository and submit your pull requests.

## License
This project currently does not have a license.
