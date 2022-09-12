import React, { useEffect } from "react"
import { useAppSelector } from "../../hooks"

export const HomePage = () => {
    const { isLoggedIn, isUserLoaded, user } = useAppSelector(state => state.user);

    useEffect(() => {
        if (isUserLoaded && !isLoggedIn) {
            window.location.href = '/login';
        }
    }, [isLoggedIn, isUserLoaded]);

    return isLoggedIn && <>{user.email}</>;
}