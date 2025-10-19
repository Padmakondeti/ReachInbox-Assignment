# ReachInbox Assignment

## Server

The assignment is to build a tool that will check and parse the emails in  multiple IMAP email accounts (like a Google and Outlook email ID) to access and manage several different email accounts from a single email client or application across various devices, and
respond to the e-mails based on the context using AI. Use BullMQ as the tasks scheduler
This is a server-based application built with Node.js and Express. It uses various packages such as  `openai` for AI functionalities, `googleapis` for Google APIs, and `axios` for HTTP requests and `bullMQ` to process queues.

## Overview

This Node.js application serves as an automated email outreach tool. It sends emails, categorizes them, generates automated replies based on the content, and sends them using the Gmail API.

## Technologies Used

### 1. Node

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows for the execution of JavaScript code server-side.

### 2. Express

Express is a web application framework for Node.js. It simplifies the process of building web applications and APIs by providing a robust set of features.

### 3. React

React is a JavaScript library for building Ssamless UI. Its component-based architecture makes it easy to manage and organize UI elements, promoting reusability and maintainability.React Provide SOC ( Seperation of Concerns ) so we can separate our app.

### 4. Axios

Axios is a promise-based HTTP client for making asynchronous requests in JavaScript. It simplifies data fetching and handling HTTP responses, making it a reliable choice for API interactions in React applications.


### Demo Presentation Link :- https://drive.google.com/file/d/1BNPy54RfOSsiBj77noC5q_0gxyeW5bRh/view?usp=sharing


## Home Page

![Home Page](https://github.com/Padmakondeti/reachinbox-Assignment/assets/128920395/43d0cc00-3eb4-4c61-b4eb-41339d86b2e3)

## After Login Categories mails Based on there Context  

 ![category](https://github.com/Padmakondeti/reachinbox-Assignment/assets/128920395/e4945f2c-e1e4-4beb-893d-f4163dd064c8)

## Sample Reply 

![reply](https://github.com/Padmakondeti/reachinbox-Assignment/assets/128920395/cf6bf230-d21d-407d-a33b-8f71ef2aa141)

## Mail after Login Success

![Interest Mail](https://github.com/Padmakondeti/reachinbox-Assignment/assets/128920395/74f24948-327c-4847-b0e3-d5091e4f4d23)



## Interest Section

 ![Interest Section](https://github.com/Padmakondeti/reachinbox-Assignment/assets/128920395/7142b552-93c7-45e7-a9d0-61671adab05e)

 ## Interest Mail 
 
![Screenshot (304)](https://github.com/Padmakondeti/reachinbox-Assignment/assets/128920395/a0482d56-7d40-4e5e-8543-83b96d4d6ed3)


 # How to Run <br/>
 
   <h2>Installation</h2>

   ### Run Frontend 
   
   Clone the repository:   ``` git clone https://github.com/Padmakondeti/ReachInbox.git ``` <br/>
   Navigate to the project directory:   ``` cd reachinbox-onebox ``` <br/>
   Navigate to the project directory:   ``` cd frontend ``` <br/>
   Install the dependencies:   ``` npm install node-imap ``` <br/>
   Start the development server:   ``` npm run start ``` <br/>
   Open your browser and visit:   ``` http://localhost:9200 ``` <br/>

   ### Run Backend 
   
   Clone the repository:   ``` git clone https://github.com/Padmakondeti/ReachInbox.git ``` <br/>
   Navigate to the project directory:   ``` cd reachinbox-onebox ``` <br/>
   Install the dependencies:   ``` npm install node-imap ``` <br/>
   Start the development server:   ``` npm run server ``` <br/>
   Open your browser and visit:   ``` http://localhost:9200 ``` <br/>

 
   # Credits <br/>
   This project was developed by ```Padmavathi Kondeti``` as a part of ```ReachInbox Assignment``` program.

   <p>Feel free to integrate and explore these endpoints into your application.</p>
  