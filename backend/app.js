require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const apiRoutes = require('./routes/apiRoutes');
const errorHandler = require('./middleware/errorHandler');
const authenticateJWT = require('./middleware/authMiddleware');
const setupWebSocket = require('./sockets/notificationSocket');
const logger = require('./utils/logger');
const connectDB = require('./config/db');

// Initialize app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/profile', authenticateJWT, profileRoutes);
app.use('/api/external', apiRoutes);

// Global Error Handler
app.use(errorHandler);

// Set up WebSocket
const server = app.listen(process.env.PORT || 3000, () => {
  logger.info(`Server is running on port ${process.env.PORT || 3000}`);
});

setupWebSocket(server);
