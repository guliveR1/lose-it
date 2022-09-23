export type MealOptions = MealOption[];

export type MealOption = {
    type: string;
    displayName: string;
}

export type MealFoods = MealFood[];

export type MealFood = {
    foodName: string;
    servingSize: number;
    calories: number;
    edit: boolean;
    id: string;
}

export type FoodOptions = FoodOption[];

export type FoodOption = {
    food_name: string;
    photo: {
        thumb: string;
    };
}