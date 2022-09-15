import axios from 'axios';
import config from '../config.json';
import { User } from '../types/user.type';

export const login = async (email: string, password: string) => {
    return axios.post(`${config.apiUrl}/login`, {
        email, 
        password,
    });
};

export const register = async (email: string, password: string) => {
    return axios.post(`${config.apiUrl}/register`, {
        email, 
        password,
    });
};

export const onboard = async (userData: Omit<User, 'email'>) => {
    return axios.put(`${config.apiUrl}/user`, userData);
};

export const getUser = async (): Promise<User> => {
    return axios.get(`${config.apiUrl}/user`).then(res => res.data);
};