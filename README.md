The food delivery website will be an online food ordering website, by which the user will be able to browse for the items
he wants to order and track the order from the menu This website will have all functionality, including login functionality for users to access it,
food browsing, cart management, and tracking of order. It is a customer-friendly interface and, on the other side, provides admin dashboard for restaurant management. 
The MERN stack-MongoDB, Express, React, Node.js-will be used in it to keep an efficient check on both the frontend and backend operations.
in this project there ar three floders 
1) admin
 the admion panel is the restaraunt owner side to accept th orders and information of adding foods now there twp food items in the website
2) Back end
  side using the backend it will conected to the mongoDb Atlas and sotres the data and uses some frame wor
3) Font end
 the front end is the main floder where the customer side can see the all we should have so many componets and files  

This project involves frontend using React.js and  It will support the UI where users can see what is available for food, add to cart, and place an order. The application's state is maintained using React hooks for component-based data management. It connects to a back-end API that has information regarding food items, orders, and user authentication.

Main Attractions:
Responsive Design: The frontend is completely responsive, and fits different screen sizes-Desktop, Tablet, Mobile.
Cart Functionality: Users are allowed to add items to their cart, adjust the quantity, and remove items.
Order Placement: Users can place an order, apply promo codes, and dynamically see the totals.
User Authentication-Involves user login, registration, and session persistence.
for adding so many photos i was created one assests.js file in that i was import all menu items and images and logo 
for the front end running npm run dev and run in local server front tend purpose used technologies HTML,CSS,JS,react
the crrating of react project 
npm create vite@latest fooddelivery
and select the react+js and after than java script and aftert that change the directory to the react floder run the server by using 
npm run server 
after that we should instal dependices 
1) react router dom
2) react
3) react-dom
4) axios


Backend Overview
The backend is built using Node.js and Express.js, providing RESTful API endpoints to handle user data, orders, and interactions with the food items.
 MongoDB is used for storing user details, order history, food items, and cart data. Authentication is managed using JWT tokens for secure session handling.

Key Features:
API Endpoints: Provides endpoints for user management (login, signup), food item retrieval, cart management, and order processing.
Database Management: Uses MongoDB to store data on food items, user orders, and cart details.
Authentication: JWT-based authentication for securing routes and managing user sessions.
Order Processing: Handles backend logic for creating, updating, and managing orders and food inventory..
we should create project by creating floder backend after ward 
we should initialize the backend technologies node 
in terminal by using npm init and i use the same dependencie to run the project for the installing the dependencies in commond prompt we should write 
npm i dependency name
1) bcrypt 
2) body-parser 
3) cors
4) dotenv
5) express
6) jsonwebtoken
7) mongoose
8) multer
9) nodemon
10) stripe
11) validator

for checking the api end point i was used the Postman in postman i was used get and post method

If you are using MongoDB, follow these steps:

Install MongoDB on your local machine or use a cloud MongoDB service like MongoDB Atlas.

Create a database named fooddelivery.

Create a .env file in the backend directory and add the following variables:

await mongoose.connect('mongodb+srv://anasmohamad369:Anas-2004@cluster0.7zidp.mongodb.net/food-del')
to connect mongosse DB 

