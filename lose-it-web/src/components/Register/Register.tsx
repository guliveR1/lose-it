import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/typed-redux';
import { sagaActions } from '../../sagas/sagaActions';
import { UserForm } from '../../shared-components/UserForm';
import { WithSideImage } from '../../shared-components/WithSideImage';

export const Register = () => {
    const { isLoggedIn, hasRegisterError } = useAppSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isLoggedIn) {
            window.location.href = '/';
        }
    }, [isLoggedIn]);

    const handleSubmit = useCallback(async (email: string, password: string) => {
        dispatch({
            type: sagaActions.REGISTER, payload: {
                email,
                password,
            }
        });
    }, [dispatch]);

    return (
        <WithSideImage>
            <UserForm
                type='register'
                onSubmit={handleSubmit}
                errorMessage={hasRegisterError && 'User already exists'}
            />
        </WithSideImage>
    )
}