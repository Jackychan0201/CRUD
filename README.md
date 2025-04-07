# CRUD Notes App
![NotesAppLogo](/Docs/NotesApp.png)

## A web notes application, where you can create, access and delete notes. Made as a recruitment task

## Project description
This project is a recruitment task. It involves such chatacteristics as:
* Language:  TypeScript
* Frontend: React.js
* Backend: Python
* Database:  MongoDB
* Tools:  Jotai(state management),  Material-UI(UI)

## Project features
In this app you can:
* Read notes
* Create notes with title and description(createdAt attribute is added automatically) - after button "Add note" is pressed, the note is being added to the notes list
* Delete notes - after button "Delete" is pressed, the note is being deleted from the notes list

## Application deployment
The application's parts are deployed separately: 
- The database is on MongoDB Atlas 
- The backend is deployed on render.com 
- The frontend is deployed on GitHub Pages

## Installation and testing the app locally
Here are the steps for local testing of the application:
- Clone the project:
```bash
git clone https://github.com/Jackychan0201/CRUD.git
```
- Navigate to the project directory:
```bash
cd CRUD
```
- Navigate to the backend directory:
```bash
cd backend
```
- Install the requirements from the file requirements.txt
```bash
pip install -r requirements.txt
```
- Start the backend:
```bash
uvicorn main:app --reload
```
>[!NOTE]
>
>backend is running on http://127.0.0.1:8000
- Navigate to the frontend directory:
```bash
cd ../frontend
```
- Install necessary dependencies:
```bash
npm install
```
- Start the frontend:
```bash
npm start
```
>[!NOTE]
>
>After you complete all these steps, you'll be able to access the application via http://localhost:3000/CRUD

## Deployed application
The application is already deployed. You can access it via:
https://jackychan0201.github.io/CRUD/
>[!WARNING]
>
>Since the free tier version of Render is used for the backend deployment, the backend might be inactive during the test. If this problem occurs, please do not hesitate to contact me, I will restart the backend. 