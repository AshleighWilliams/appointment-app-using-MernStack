# Appointment MERN application for Doctors

## How this application works: 
* This application will allow users (doctors) to add, edit or delete appointments and patient information users will either need to login or register as a new user to access this.
* On the backe-end express (which is the server) will be listening for requests made by the user and then modify the MongoDB database accordingly
* On the frontend , React will accept this information and respond by sending to the server (Express) via Axios to interact with the MongoDB database.

# System Architecture and System Requirements Specifications:

# System Architecture:
* The web stack used for developing this application is the MERN Stack.
* MERN Stack consists of 4 technologies namely MongDB, Express, React and Nodejs.
* MongoDB, Express and Node for the back-end of this application.
* It creates, reads, updates and deletes information from MongoDB.
* A custom server using Express.
* React (Create-React-App) for the front-end of this application.
* Json Web Tokens (JWT) for the authentication middleware.
* For easy and effective styling, the application is styled with Bootstrap and React Bootstrap.
* The application will be deployed on GitHub and Heroku.
 
# System Requirements:

## Functional Requirements:
* The application authenticates existing users (doctors) access through a passport strategy of a username and password.
* The application allows non-existing users (doctors) to register an account.
* Users will be notified that they are logged in successfully.
* The application allows users (doctors) to add, update and delete appointments.
* The application allows users (doctors) to view their appointments.
* The application allows users (patients) who are not logged in or registered to only view appointments made by doctors.

## Non-functional Requirements:
* Signing in after registration takes 10 seconds.
* Verify user identity by strong password (strong password that contains a certain number of characters, a capital letter, numbers and symbols) to be able to sign in successfully.
* Non-existing users HAVE to sign up to create an account.
* Users (doctors) can add, edit or delete appointments throughout the week at any time during the day. 
* In the case of unplanned system downtime, all features will be available again after one working day.
* Appointments stored on database.
* The application and user interface is overall attractive, simple and easy for users to use.

## User Stories:
1.	As a doctor and user of the app, I want to be able to sign in to my account with a password so that my profile with all of my specific appointments can be viewed and stored safely. 
2.	As a doctor and user of the app, I want to be able to add an appointment to the list of appointments so that I can see all the appointments for the day, week and month.
3.	As a doctor and user of the app, I want to be able to edit and delete an appointment from the list of existing appointments so that the appointment list can be updated and organized accordingly.
4.	As a patient and user of the app, I want to view the appointment list so that I am able to check if my booking is correct.
5.	As a non-existing user of the app, I want to be able to register for an account so that I am able to create my list of appointments.

## Similar Software available:
* A similar software is Appointment Guru which is complex to use first-hand. This is where this application stands out, it is simple and user-friendly enough allowing for smooth appointment bookings.

## Usage:
* Register as a new user and then sign in with the registration credentials.
* On successful login, add appointments with its details.
* View your appointment list.

## Installation:
* `cd to the root folder`
* type `npm install` in terminal to install node_modules folder
* `cd to client`
* type `npm install` in terminal to install node_modules folder
* create a .env file with the following content:
   `
   DB: enter your mongoDB string 
   PORT: enter your port number
   JWT_SECRET = enter your secret
   `
* type `npm run dev` to run the client and the backend of the application concurrently

## Security: 
* Helmet is used as security for the server end of the application.

## Deployment:
* This application is deployed to GitHub and Heroku.

## Resource Used:
* Traversy Media on Learning the MERN Stack : https://youtube.com/playlist