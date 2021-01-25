# CRUD - Typescript

This repository can be used for building
`NODE REST API`'s using `TypeScript` on top of `Express` web framework.  

# Features
 - Repository pattern used to enable separation of concerns
 - `MongoDB` - default repository implementation, should be easy to replace
 
# Pre-reqs
- Install [Node.js](https://nodejs.org/en/)
- Install [MongoDB](https://docs.mongodb.com/manual/installation/)
- Configure your SMTP service and enter your SMTP settings inside `.env.example`

# Getting started
- Clone the repository
```
git clone --depth=1 https://github.com/EmadElmogy/CRUD-User-Hobbies <project_name>
```
- Install dependencies
```
cd <project_name>
npm install
```
- Configure your mongoDB server
```
# create the db directory
sudo mkdir -p /data/db
# give the db correct read/write permissions
sudo chmod 777 /data/db
```
- Start your mongoDB server (you'll probably want another command prompt)
```
mongod
```
- Build and run the project
```
npm run build
npm start
```

# Swagger
To access Swagger UI for available endpoints
```
http://localhost:3000/api-docs/#/
```

# Tests
* Before running tests be sure to create a real `.env` file in root using the fields found in `.env.example`
```
npm run test
```