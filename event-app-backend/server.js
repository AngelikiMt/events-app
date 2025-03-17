require('dotenv').config();
const express = require('express'); // Requires express in the server.js file
const mongoose = require('mongoose');
const cors = require('cors');
const eventRoutes = require('./routes/events');
const morgan = require('morgan');

const app = express(); // Initialize express so we can use it in our application

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Routes
app.use('/api/events', eventRoutes); // Create the routes imported from ./routes/events file.

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // This line starts the server