import React, { useEffect } from 'react';
import { SignIn } from './SignIn/SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './HomePage/HomePage';
import { useDispatch } from 'react-redux';
import { sagaActions } from '../sagas/sagaActions';
import { Register } from './Register/Register';
import { Onboard } from './Onboard/Onboard';

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: sagaActions.GET_USER });
    }, [dispatch]);
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<SignIn />} />
                <Route path="register" element={<Register />} />
                <Route path="onboard" element={<Onboard />} />
            </Routes>
        </BrowserRouter>
    );
};