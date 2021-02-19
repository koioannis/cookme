
# Cookme Backend

# Pre-requisites
- Install [Node.js](https://nodejs.org/en/)  (This project was created with v14.15.3)
-  Install [MongoDb](https://www.mongodb.com/) (This project was created with v4.4.2)


# Getting started
- Clone the repository
```
git clone https://github.com/koioannis/cookme.git
```
- Install dependencies
```
cd cookme/server
npm install
```
- Build and run the project
```
npm start
```
- API Document endpoints

  swagger-ui  Endpoint : http://localhost:3000/docs

## Configuring the .env file
The .env file values are explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **JWT_SECRET**          | JSON Web Token (JWT) secret (should be a 20-ish character string)                                                            |
| **JWT_ALGO**            | The algorithm used to sign the secret to JWT (default is RS256)                      |
| **MONGODB_URI**          | The connection string of the MongoDB server.
| **PORT**                 | The port that serves the app.
| **LOG_LEVEL**            | The format of the messages displayed by the logger.
| **GMAIL_USERNAME**       | The email used to send reset passoword emails.
| **GMAIL_PASSWORD**       | The password of the gmail.
| **FORGOT_PASSWORD_URL**       | The frontend endpoint for the forgot password.

## Project Structure
The folder structure of this app is shown and explained below:

```bash
./src
├── api
│   ├── middlewares
│   └── routes
├── config
├── loaders
├── mapping
├── models
├── services
├── templates
└── app.js
```

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **node_modules**         | Contains all  npm dependencies                                                            |
| **src**                  | Contains  source code that will be compiled to the dist dir                               |
| **.env**        		   | Application configuration including environment-specific configs 
| **src/api**              | Contains all the routes & middlewaresof the api. 
| **src/config**           | A config object based on the .env file for code auto-complete and better structure.  
| **src/loaders**          | Contain all the loaders of the application. Stuff that need to be done before serving any route.
| **src/mapping**          | Data transfer objects for mapping.
| **src/models**           | Models define schemas that will be used in storing and retrieving data from Application database  |
| **src/services**         | Contains all the business logic.
| **src/templates**        | Contains html templates for emails.
| **src**/app.js            | Entry point to express app                                                           
| package.json             | Contains npm dependencies as well as build scripts.
| .eslintrc.json           | Config settings for ESLint code style checking

### Running the build
All the different build steps are orchestrated via [npm scripts](https://docs.npmjs.com/misc/scripts).
Npm scripts basically allow us to call (and chain) terminal commands via npm.

| Npm Script | Description |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `start`                   | Runs a nodemon server                  |  |


# Swagger Specification
The swagger specification file is named as swagger.json. The file is located under definition folder.
