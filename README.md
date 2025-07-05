# BookNGo - Event Discovery App
BookNGo is a full-stack web application built to help users discover, browse, create, and manage events across various cities in Greece.

## Tech Stack

| Layer          | Requirements                                  |
|----------------|-----------------------------------------------|
| Backend        | Node.js, Express, Mongoose                    |
| Frontend       | React - Vite, React Router, Bootstrap         |
| API Format     | Restfull JSON                                 |
| Database       | MongoDB                                       |
| Configuration  | `.env` for DB credentials                     |
| DevOps         | Git, `.gitignore`, modular folder structure   |
| Tooling        | Axios, dotenv, morgan, cors, Bootstrap 5      |

## Features
<b>1. Home Page</b>

API Endpoint: https://events-app-med4.onrender.com/

<b>2. View All Events</b>

API Endpoint: https://events-app-med4.onrender.com/events

<b>3. View Event By Id</b>

API Endpoint: https://events-app-med4.onrender.com/events/id/<id>

<b>4. Filter Events By Category</b>

API Endpoint: https://events-app-med4.onrender.com/events/categories

<b>5. Filter Events By City</b>

API Endpoint: https://events-app-med4.onrender.com/events/cities

<b>6. Create An Event</b>

API Endpoint: https://events-app-med4.onrender.com/add

<b>7. UI styled with Bootstrap 5</b>

## Installation

1. Clone the repository 
``` 
https://github.com/AngelikiMt/events-app.git 
```
2. Backend Setup
- Navigate to the backend folder
```
cd event-app-backend
```
- Install dependencies
```
npm install
```
- Create a .env file
```
MONGO_URI=mongodb://localhost:5000/bookngo
PORT=5000
```
- Start the server (backend runs on http://localhost:5000)
```
node server.js
```

3. Frontend Setup
- Navigate to the frontend folder
```
cd event-app-frontend/bookngo-frontend
```
- install dependencies
```
npm install
```
- start the development server (server runs at http://localhost:5173)
``` 
npm run dev
```
