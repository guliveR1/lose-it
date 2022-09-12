import React from 'react';
import { useAppSelector } from '../hooks';
import { SignIn } from './SignIn/SignIn';

export const App = () => {
    const isLoggedIn = useAppSelector(state => state.user.isLoggedIn);

    return isLoggedIn ? <>Home page</> : <SignIn />;
};