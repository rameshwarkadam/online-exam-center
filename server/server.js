const express = require('express');
const connectDB = require('./app/config/db'); // Import the DB connection function
const examRoutes = require('./app/controllers/examController/routes/exam.route');
const authRoutes = require('./app/controllers/authController/routes/auth.routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Parse JSON bodies

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes); 
app.use('/api/exams', examRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
