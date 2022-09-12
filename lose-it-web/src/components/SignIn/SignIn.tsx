import * as React from 'react';
import { WithSideImage } from '../../shared-components/WithSideImage';
import { useDispatch } from 'react-redux';
import { sagaActions } from '../../sagas/sagaActions';
import { useAppSelector } from '../../hooks/typed-redux';
import { useCallback, useEffect } from 'react';
import { UserForm } from '../../shared-components/UserForm';

export const SignIn = () => {
    const dispatch = useDispatch();
    const { hasLoginError, isLoggedIn } = useAppSelector(state => state.user);

    useEffect(() => {
        if (isLoggedIn) {
            window.location.href = '/';
        }
    }, [isLoggedIn]);

    const handleSubmit = useCallback(async (email: string, password: string) => {
        dispatch({
            type: sagaActions.LOGIN, payload: {
                email,
                password,
            }
        });
    }, [dispatch]);

    return !isLoggedIn && (
        <WithSideImage>
            <UserForm
                type='login'
                onSubmit={handleSubmit}
                errorMessage={hasLoginError && 'The email or the password entered are incorrect!'}
            />
        </WithSideImage>
    );
}