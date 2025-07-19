# Job Portal Application Frontend

This is the frontend application for Job Verse, a platform designed to connect job seekers with potential employers. The application is built using React and Vite, and it leverages various modern web technologies to provide a seamless user experience.

To use the Admin Controls login with this Credentials:

Login ID - admin@example.com
Password - Admin@789

## Features

### User Authentication
- **Register**: Users can create a new account by providing their personal information, including name, email, password, profile picture, and resume.
- **Login**: Existing users can log in using their email and password.
- **Change Password**: Users can change their password from their profile.
- **Delete Account**: Users can delete their account if they no longer wish to use the platform.

### User Profile
- **View Profile**: Users can view their profile information, including their avatar, name, email, and skills.
- **Edit Profile**: Users can update their profile information, including their avatar, resume, and skills.

### Job Management
- **View Jobs**: Users can browse through a list of available jobs.
- **Job Details**: Users can view detailed information about a specific job, including the company name, job title, description, location, salary, and required skills.
- **Apply for Jobs**: Users can apply for jobs directly from the job details page.
- **Save Jobs**: Users can save jobs to review later.

### Applications Management
- **View Applications**: Users can view all the jobs they have applied for.
- **Application Details**: Users can view detailed information about their job applications, including the status and the date of application.

### Admin Features
- **Dashboard**: Admins can view a dashboard with statistics about the platform, including the number of jobs, applications, and users.
- **Manage Jobs**: Admins can create, edit, and delete job postings.
- **Manage Users**: Admins can view all users and update their roles.
- **Manage Applications**: Admins can view all job applications and update their statuses.

### Additional Features
- **Responsive Design**: The application is fully responsive and works well on both desktop and mobile devices.
- **Loading Indicators**: The application shows loading indicators while fetching data to improve user experience.
- **Notifications**: Users receive notifications for various actions, such as successful login, application submission, and profile updates.

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides a fast development environment.
- **Redux Toolkit**: A library for managing application state.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **React Router**: A library for routing in React applications.
- **Axios**: A promise-based HTTP client for making API requests.
- **Framer Motion**: A library for animations in React.
- **React Icons**: A library for including icons in React applications.

## Getting Started
To get started with the project, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/Prasanna0401/Job-Portal-Application-JobVerse.git
    ```

2. Navigate to the frontend directory:

    ```bash
    cd frontend
    ```

3. Install the required dependencies:

    ```bash
    npm install
    ```

4. Run the development server:

    ```bash
    npm run dev
    ```

5. The application will be running on `http://localhost:5173`.

---

# Job Portal Application Backend

This is the backend application for Job Verse, a platform designed to connect job seekers with potential employers. It provides API endpoints to manage users, jobs, applications, and admin functionalities. The service uses Node.js, Express.js, MongoDB, and Cloudinary for file uploads.

## Installation Guide for Backend

If you want to set up the backend, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/Prasanna0401/Job-Portal-Application-JobVerse.git
    ```

2. Navigate to the backend directory:

    ```bash
    cd backend
    ```

3. Install the required dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file and add your environment variables:

    ```bash
    MONGO_URI=your_mongodb_uri
    PORT=your_port_number
    JWT_SECRET=your_jwt_secret
    CLOUDINARY_CLOUD_NAME=your_cloudinary_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    ```

5. Start the server:

    ```bash
    npm start
    ```

6. The server will be running on `http://localhost:${Port}`.

---

## API Endpoints

### User Routes
- **POST /api/v1/register** - Register a new user.
- **POST /api/v1/login** - Login a user.
- **GET /api/v1/isLogin** - Check if a user is logged in.
- **GET /api/v1/me** - Get the logged-in user's profile.
- **PUT /api/v1/changePassword** - Change the logged-in user's password.
- **PUT /api/v1/updateProfile** - Update the logged-in user's profile.
- **PUT /api/v1/deleteAccount** - Delete the logged-in user's account.

### Job Routes
- **POST /api/v1/create/job** - Create a new job (admin only).
- **GET /api/v1/jobs** - Get all jobs.
- **GET /api/v1/job/:id** - Get a single job by ID.
- **GET /api/v1/saveJob/:id** - Save/Unsave a job for the logged-in user.
- **GET /api/v1/getSavedJobs** - Get all saved jobs for the logged-in user.

### Application Routes
- **POST /api/v1/createApplication/:id** - Create a new application for a job.
- **GET /api/v1/singleApplication/:id** - Get a single application by ID.
- **GET /api/v1/getAllApplication** - Get all applications for the logged-in user.
- **DELETE /api/v1/deleteApplication/:id** - Delete an application by ID.

### Admin Routes
- **GET /api/v1/admin/allJobs** - Get all jobs (admin only).
- **GET /api/v1/admin/allUsers** - Get all users (admin only).
- **GET /api/v1/admin/allApp** - Get all applications (admin only).
- **GET /api/v1/admin/getApplication/:id** - Get a single application by ID (admin only).
- **PUT /api/v1/admin/updateApplication/:id** - Update an application by ID (admin only).
- **DELETE /api/v1/admin/deleteApplication/:id** - Delete an application by ID (admin only).
- **GET /api/v1/admin/getUser/:id** - Get a single user by ID (admin only).
- **PUT /api/v1/admin/updateUser/:id** - Update a user by ID (admin only).
- **DELETE /api/v1/admin/deleteUser/:id** - Delete a user by ID (admin only).
- **GET /api/v1/admin/getJob/:id** - Get a single job by ID (admin only).
- **PUT /api/v1/admin/updateJob/:id** - Update a job by ID (admin only).
- **DELETE /api/v1/admin/deleteJob/:id** - Delete a job by ID (admin only).

## Postman Documentation

You can import the following Postman collection to test all the API endpoints:
[POSTMAN API Documentation URL](https://documenter.getpostman.com/view/39260343/2sB34hHLcz)

### Steps to Import Postman Collection
1. Click the **Run in Postman** button above.
2. This will open Postman and import the collection.
3. Set up environment variables in Postman for `base_url`, `token`, etc., as required by the endpoints.
4. Test all the API endpoints directly from Postman.
