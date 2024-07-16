const Exam = require('../../models/exam.model');

// Get all exams
const getExams = async (req, res) => {
    try {
        const exams = await Exam.find();
        res.json(exams);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new exam
const createExam = async (req, res) => {
    const { title, description, subject, questions } = req.body;
    const exam = new Exam({ title, description, subject, questions });

    try {
        const savedExam = await exam.save();
        res.status(201).json(savedExam);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get exam by ID
const getExamById = async (req, res) => {
    try {
        const exam = await Exam.findById(req.params.id);
        if (!exam) return res.status(404).json({ message: 'Exam not found' });
        res.json(exam);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getExams, createExam, getExamById };
