import axios from 'axios';

const API_URL = "http://127.0.0.1:8000/api/";

export const register = async (username, password) => {
    return axios.post(`${API_URL}users/register/`, { username, password });
};

export const login = async (username, password) => {
    return axios.post(`${API_URL}users/login/`, { username, password });
};
