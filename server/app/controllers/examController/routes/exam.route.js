const express = require('express');
const router = express.Router();
const { getExams, createExam, getExamById} = require('../exam.controller');

// Define routes
router.get('/', getExams);
router.post('/', createExam);
router.get('/:id', getExamById); // Route to get a specific exam by ID

module.exports = router;
