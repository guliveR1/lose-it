import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MealOptions } from "../../types/meal.type";

type MealState = {
    isLoadingMealOptions: boolean;
    hasMealOptionsError: boolean;
    mealOptions?: MealOptions;
}

const initialState: MealState = {
    isLoadingMealOptions: false,
    hasMealOptionsError: false,
}

export const mealSlice = createSlice({
    name: 'meal',
    initialState,
    reducers: {
        mealOptionsLoading: (state) => {
            state.isLoadingMealOptions = true;
        },
        mealOptionsLoaded: (state, action: PayloadAction<MealOptions>) => {
            state.mealOptions = action.payload;
            state.isLoadingMealOptions = false;
        },
        mealOptionsError: (state) => {
            state.isLoadingMealOptions = false;
            state.hasMealOptionsError = true;
        },
    }
});

export const {
    mealOptionsLoading,
    mealOptionsLoaded,
    mealOptionsError,
} = mealSlice.actions;