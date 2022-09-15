import { createSlice } from "@reduxjs/toolkit";
import { User } from '../../types/user.type';

type UserState = {
    isUserLoaded: boolean;
    isLoggedIn: boolean;
    hasLoginError: boolean;
    hasRegisterError: boolean;
    user: User;
}

const initialState: UserState = {
    isUserLoaded: false,
    isLoggedIn: false,
    hasLoginError: false,
    hasRegisterError: false,
    user: {
        email: '',
        onboarded: false,
    },
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        displayLoginError: (state) => {
            state.hasLoginError = true;
        },
        displayRegisterError: (state) => {
            state.hasRegisterError = true;
        },
        loggedIn: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        userLoaded: (state) => {
            state.isUserLoaded = true;
        },
    }
});

export const {
    loggedIn,
    displayLoginError,
    displayRegisterError,
    userLoaded
} = userSlice.actions;