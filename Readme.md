# Collaborative Story Builder

The **Collaborative Story Builder** is a web application that allows multiple users to collaborate in creating and contributing to stories. Users can sign up, log in, create stories, contribute content to ongoing stories, and view analytics for each story. This project is built using Node.js, Express, MongoDB, and JSON Web Tokens (JWT) for authentication.

## Features

- **User Authentication**: Secure sign-up and login with JWT authentication.
- **Story Creation**: Users can create new stories with title, description, and tags.
- **Story Contributions**: Users can add content to existing stories, enhancing the collaborative aspect.
- **Analytics**: Story analytics (e.g., number of contributions, word count, etc.) for users to track the growth of stories.

## Tech Stack

- **Frontend**: Not implemented yet (Can be added using frameworks like React or Angular).
- **Backend**: 
  - Node.js
  - Express.js
  - MongoDB
  - JWT (JSON Web Token) for user authentication
- **Database**: MongoDB for storing user data, stories, and contributions.

## Prerequisites

Before running the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Postman](https://www.postman.com/) for API testing (optional)

## Installation

### Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/collaborative-story-builder.git


-----------------------------------------------------
Install Dependencies
Navigate into the project folder and install all required dependencies using npm:


cd collaborative-story-builder
npm install
--------------------------------------------------

Configure the Environment
Create a .env file in the root of the project directory.
Add the following environment variables to the .env file:

----------------------------------------------------
Run the Project
To start the server locally, run the following command:

npm start

The server will start on http://localhost:5000.


