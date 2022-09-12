import React, { useEffect } from "react"
import { useAppSelector } from "../../hooks/typed-redux";
import { useUser } from "../../hooks/useCheckUser";

export const HomePage = () => {
    const { isLoggedIn, user } = useUser();

    useEffect(() => {
        if (user && !user.onboarded) {
            window.location.href = '/onboard';
        }
    }, [user]);

    return isLoggedIn && <>{user.email}</>;
}