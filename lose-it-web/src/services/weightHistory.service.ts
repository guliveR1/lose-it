import axios from 'axios';
import config from '../config.json';
import { WeightHistory, WeightHistoryEntry } from '../types/weightHistory.type';

export const getWeightHistory = async (): Promise<WeightHistory> => {
    return axios.get(`${config.apiUrl}/user/weight-history`).then(res => res.data);
};

export const addWeight = async (weightHistoryEntry: WeightHistoryEntry): Promise<void> => {
    return axios.post(`${config.apiUrl}/user/weight-history`, weightHistoryEntry);
};