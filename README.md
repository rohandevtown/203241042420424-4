# Book Record Managment System

## Routes and Endpoints

### /users

POST: Creating a new user
GET: Get the list of all users

### /users/{id}

GET: Get a user by ID
PUT: Update a user by ID
DELETE: Delete a user by their ID (chk if he/she has an issued book) (also need to make sure he/she has no penalty)

### /users/subscription-details/{id}

GET: Get user subscription details >> Date of the subscription >> Till when its valid >> Fine if any

### /books

GET: Get all books
POST: Creating/Adding a new book

### /book/{id}

GET: Getting a book by ID
PUT: Update a book by ID

### /books/issued

GET: Get all issued books

### /books/issued/withFine

GET: Get all issued books with fine

# Subscription Types:

    >> Basic (3 months)
    >> Standard (6 months)
    >> Premium (12 months)



## Cmds:
    >> npm init
    >> npm i express
    >> npm i nodemon --save-dev