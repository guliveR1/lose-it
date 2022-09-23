import express, { Request, Response, NextFunction } from "express";
import config from '../../config.json';
import axios from 'axios';
import { MealOption } from "../models/MealOption";

export const foodRouter = express.Router();

foodRouter.get('/food', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { query } = req.query;
        const foodList = await axios.get(`${config.foodApiUrl}/search/instant?query=${query}`, {
            method: 'GET',
            headers: {
                'x-app-key': config.foodApiKey,
                'x-app-id': config.foodApiAppId,
            }
        }).then(response => response.data.common);

        res.json(foodList);
    } catch (ex) {
        next(ex);
    }
});

foodRouter.get('/meal-options', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const mealOptions = await MealOption.findAll({ order: ['priority'] });

        res.json(mealOptions);
    } catch (ex) {
        next(ex);
    }
});