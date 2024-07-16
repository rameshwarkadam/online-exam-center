const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
    text: { type: String, required: true },
    isCorrect: { type: Boolean, default: false } // Indicate if this option is correct
});

const questionSchema = new mongoose.Schema({
    questionText: { type: String, required: true },
    options: [optionSchema], // Array of options
});

const examSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    subject: { type: String },
    questions: [questionSchema], // Array of questions
});

const Exam = mongoose.model('Exam', examSchema);

module.exports = Exam;
