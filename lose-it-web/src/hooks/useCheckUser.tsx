import { useEffect } from 'react';
import { useAppSelector } from './typed-redux';

export const useUser = () => {
    const { isLoggedIn, isUserLoaded, user } = useAppSelector(state => state.user);
    
    useEffect(() => {
        if (isUserLoaded && !isLoggedIn) {
            window.location.href = '/login';
        }
    }, [isLoggedIn, isUserLoaded]);

    return { isLoggedIn, user: isUserLoaded && user };
}