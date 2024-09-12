# Node.js Backend Project

## Project Overview
This is a Node.js backend project that provides RESTful APIs, authentication using JWT, real-time notifications, and integrates with a MongoDB database. It also supports data fetching from external APIs with caching and handles errors efficiently.

## Features
- CRUD operations for product inventory
- User registration and login with JWT authentication
- Protected routes for authenticated users
- Real-time notifications using WebSockets
- Data fetching from an external API with caching
- MongoDB integration for persistent storage
- Error handling and logging

## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB** (Mongoose)
- **JWT** for authentication
- **Socket.IO** for real-time communication
- **Axios** for external API calls
- **Winston** for logging

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/project-name.git
   cd project-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following content:
   ```bash
   PORT=3000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. Run the backend:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication
- **POST** `/api/auth/register`: Register a new user
- **POST** `/api/auth/login`: User login, returns a JWT token

### Products
- **POST** `/api/products`: Create a new product
- **GET** `/api/products`: Get all products
- **GET** `/api/products/:id`: Get a single product by ID
- **PUT** `/api/products/:id`: Update a product by ID
- **DELETE** `/api/products/:id`: Delete a product by ID

### External API
- **GET** `/api/external/fetch`: Fetch data from an external API

## Usage
1. Make sure MongoDB is running locally or provide a remote MongoDB URI in the `.env` file.
2. Use Postman or another API client to test the endpoints.
3. To test authentication, register a user, then login to get the JWT token, and include it in the Authorization header for protected routes.

## License
This project is open-source and available under the [MIT License](LICENSE).
