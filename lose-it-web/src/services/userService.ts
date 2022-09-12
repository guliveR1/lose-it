import axios from 'axios';
import config from '../config.json';

export const login = async (email: string, password: string) => {
    return axios.post(`${config.apiUrl}/login`, {
        email, 
        password,
    });
};