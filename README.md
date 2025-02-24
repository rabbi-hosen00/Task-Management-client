# Language Exchange: Online Tutor Booking Platform

## Project Overview
Language Exchange is an Online Tutor Booking Platform designed to connect users with tutors across various languages and subjects. The platform simplifies the process of finding, reviewing, and booking tutors through an interactive and user-friendly interface. It promotes accessible learning opportunities globally while streamlining the tutor hiring process. Users can browse categories, view detailed tutor profiles, and book sessions securely. 

### Live URL
[Language Exchange Platform](https://learning-language-127fc.web.app/)

---

## Purpose
The platform aims to provide a seamless and efficient way for users to:
- Find tutors for different languages and subjects.
- Book tutorial sessions securely.
- Enhance their learning experience through interactive features like tutor reviews and tutorials.

Similar platforms include Preply and Italki, which inspired the development of this project.

---

## Key Features

### General Features
- Fully responsive design for mobile, tablet, and desktop.
- Secure storage of Firebase configuration keys and MongoDB credentials using environment variables.
- A design that ensures proper alignment, spacing, and color contrast.

### Core Functionalities
1. *Navbar*:
    - Website name/logo reflecting the theme.
    - Navigation links for Home, Find Tutors, Add Tutorials, My Tutorials, and My Booked Tutors.
    - Conditional Login/Logout functionality with a profile picture dropdown.
    
2. *Authentication System*:
    - Email/Password-based login and Google Sign-in.
    - Registration with fields for name, email, password, and photo URL.
    - Display relevant error messages for login/registration.

3. *Home Page*:
    - Banner section with a carousel of relevant images.
    - Stats section showcasing:
        - Total tutor count.
        - Total review count.
        - Total language categories.
        - Total user count.
    - Language category cards with a minimum of 9 categories, each linking to tutors by category.

4. *Find Tutors Page*:
    - List of all tutors added through the "Add Tutorials" page.
    - Search functionality to find tutors by language.
    - Pagination to display 6-9 tutors per page.

5. *Tutor Details Page* (Private Route):
    - Detailed information about tutors, including name, image, language, description, price, and reviews.
    - Booking functionality that stores details in the database.

6. *My Booked Tutors Page* (Private Route):
    - Display of all booked tutors with a review button to increment their review count.

7. *Add Tutorials Page* (Private Route):
    - Form to add a tutorial with fields for name, email, image, language, price, description, and reviews (default: 0).

8. *My Tutorials Page* (Private Route):
    - Display of tutorials added by the user.
    - Edit and delete functionality for tutorials.

### Additional Features
- Loading spinner for data loading states.
- Error page for handling 404 errors.
- JWT authentication for secure user verification.
- Dark/Light theme toggle.

---

## Tech Stack
- *Frontend*: React.js, Tailwind CSS (with optional libraries like Mamba UI, Chakra UI, or ShadCN).
- *Backend*: Node.js, Express.js.
- *Database*: MongoDB.
- *Authentication*: Firebase.
- *Deployment*: Netlify for frontend, Render for backend.

---

## Deployment Checklist
- Ensure the server works perfectly without CORS/404/504 errors.
- Validate that the live link is functional and error-free on all routes.
- Add the deployment domain to Firebase for authorization.
- Maintain user session integrity on private routes.

---

## npm Packages Used
- react-router-dom: For navigation.
- axios: For API requests.
- firebase: For authentication.
- dotenv: For managing environment variables.
- jsonwebtoken: For JWT authentication.
- tailwindcss: For styling.

---

## How to Run the Project Locally

1. Clone the repository:
   bash
   git clone [repository_url]
   

2. Install dependencies for both client and server:
   bash
   cd client
   npm install
   cd ../server
   npm install
   

3. Create .env files for both client and server:
   - *Client*:
     
     REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
     
   - *Server*:
     
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     

4. Start the development servers:
   - Client:
     bash
     npm start
     
   - Server:
     bash
     npm run dev
     

5. Open the client at [http://localhost:3000](http://localhost:3000).

---

## Future Enhancements
- Implement advanced search filters.
- Add real-time chat functionality between tutors and users.
- Incorporate a recommendation system for tutors.
- Expand support for additional payment gateways.

---

Feel free to explore the project, and we hope you enjoy your experience with Language Exchange!
