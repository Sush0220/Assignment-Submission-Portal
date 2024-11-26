# Assignment Submission Portal
## Project Overview
This project is an **Assignment Submission Portal** where Users can submit their assignments, and Admins can review, accept, or reject those assignments. The application is built using Angular for the frontend and Node.js with MongoDB for the backend. 

## Key Features
- User Role:
  - Users can register, login, and submit assignments.
- Admin Role:
  - Admins can register, login, and view assignments tagged to them.
  - Admins can accept or reject assignments.

## Tech Stack
**Frontend**
  - Angular: Framework used for building the user interface.
  - Bootstrap: For responsive design and UI components.

**Backend**
  - Node.js - JavaScript runtime for building the backend.
  - Express.js - Web framework for Node.js.
  - MongoDB - NoSQL database for storing users, assignments, and admin data.
  - JWT (JSON Web Tokens) - For secure authentication.
**Other Dependencies**
  - Mongoose - MongoDB object modeling tool for Node.js.
  - Bcryptjs - For hashing passwords securely.
  - HttpClient - For communication between frontend and backend.

## Installation
Follow these steps to get the project up and running on your local machine.
1. **Clone Repository**
 ```bash
git clone https://github.com/your-username/assignment-submission-portal.git
```
2. **Install Frontend Dependencies**
```bash
  cd frontend
  npm install
```
3. **Install Backend Dependencies**
```bash
  cd backend
  npm install
```
4. **Set Up Environment Variables**
```bash
  MONGO_URI=mongodb://localhost:27017/assignment-portal
  JWT_SECRET=your-secret-key
  PORT=5000  
```
5. **Run the Application**
  - Start Backend Server
```bash
  cd backend
  npm start
```
The backend will be running at http://localhost:5000.
  - Start the frontend Server
```bash
  cd frontend
  ng serve
```
The frontend will be available at http://localhost:4200.

## Running the Application
Once the backend and frontend servers are running, you can access the Assignment Submission Portal by visiting the following URL in your browser:

- Frontend: http://localhost:4200
- Backend API: http://localhost:5000
### User Flow
1. User Registration: Users can register by providing their name, email, password, and role (User or Admin).
2. User Login: Users can log in using their email and password. After a successful login, a JWT token will be stored in localStorage.
3. User Dashboard: Users can view their submitted assignments along with their statuses. They can also submit new assignments.
4. Admin Dashboard: Admins can view assignments tagged to them. They can accept or reject assignments.

## API Endpoints
1. **User Endpoints**
  - POST /register - Register a new user.
  - POST /login - User login.
  - GET /assignments/user/:userId - Get all assignments for the logged-in user.
  - POST /assignments - Submit a new assignment.
2. **Admin Endpoints**
  - POST /register - Register a new admin.
  - POST /login - Admin login.
  - GET /assignments - Get all assignments assigned to the admin.
  - POST /assignments/:id/accept - Accept an assignment.
  - POST /assignments/:id/reject - Reject an assignment.
