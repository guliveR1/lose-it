import { createSlice } from "@reduxjs/toolkit";

interface UserState {
    isLoggedIn: boolean;
    hasLoginError: boolean;
}

const initialState: UserState = {
    isLoggedIn: false,
    hasLoginError: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        displayError: (state) => {
            state.hasLoginError = true;
        },
        loggedIn: (state, action) => {
            state.isLoggedIn = true;
        }
    }
});

export const { loggedIn, displayError } = userSlice.actions;