import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Change as needed
});

export const registerUser = (data) => api.post('/auth/register', data);
export const loginUser = (data) => api.post('/auth/login', data);
export const getExams = () => api.get('/exams');
export const getExamById = () =>api.get(`/exam/:id`)
// Add more services as needed
