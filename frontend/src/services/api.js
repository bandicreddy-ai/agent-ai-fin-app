import axios from 'axios';

const API_URL = 'http://localhost:8080/api/transactions';

export const addTransaction = async (transaction) => {
    const response = await axios.post(API_URL, transaction);
    return response.data;
};

export const getWeeklyReport = async (date) => {
    const response = await axios.get(`${API_URL}/weekly`, { params: { date } });
    return response.data;
};
