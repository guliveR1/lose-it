import axios from "axios";
import { FoodOptions, MealOptions } from "../types/meal.type";
import config from '../config.json';

export const getMealOptions = (): Promise<MealOptions> => {
    return axios.get(`${config.apiUrl}/meal-options`).then(res => res.data);
}

export const getFoodOptions = (searchTerm: string): Promise<FoodOptions> => {
    return axios.get(`${config.apiUrl}/food?query=${searchTerm}`).then(res => res.data);
}