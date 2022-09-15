import axios from 'axios';
import config from '../config.json';
import { WeightHistory } from '../types/weightHistory';

export const getWeightHistory = async (): Promise<WeightHistory> => {
    return axios.get(`${config.apiUrl}/user/weight-history`).then(res => res.data);
};