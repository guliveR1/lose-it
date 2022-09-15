import { createSlice } from "@reduxjs/toolkit";
import { WeightHistory } from "../../types/weightHistory.type";

type WeightHistoryState = {
    isLoading: boolean;
    hasError: boolean;
    history?: WeightHistory;
}

const initialState: WeightHistoryState = {
    isLoading: false,
    hasError: false,
}

export const weightHistorySlice = createSlice({
    name: 'weightHistory',
    initialState,
    reducers: {
        displayWeightHistoryError: (state) => {
            state.hasError = true;
        },
        weightHistoryLoading: (state) => {
            state.isLoading = true;
        },
        weightHistoryLoaded: (state, action) => {
            state.isLoading = false;
            state.history = action.payload;
        },
    }
});

export const { 
    displayWeightHistoryError, 
    weightHistoryLoading, 
    weightHistoryLoaded,
} = weightHistorySlice.actions;