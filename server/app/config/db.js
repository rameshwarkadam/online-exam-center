const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://devudhavjadhav:3SvYkUTwzYqWwbMI@my-clustor.xwcavqi.mongodb.net/', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 20000, // Increase timeout if needed
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB;
