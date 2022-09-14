import { Box, LinearProgress, linearProgressClasses, styled, Typography } from "@mui/material";
import React, { useEffect } from "react"
import { useUser } from "../../hooks/useCheckUser";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 12,
    borderRadius: 5,
    width: '60%',
    margin: '0 auto',
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));

export const HomePage = () => {
    const { isLoggedIn, user } = useUser();

    useEffect(() => {
        if (user && !user.onboarded) {
            window.location.href = '/onboard';
        }
    }, [user]);

    return isLoggedIn && (
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                backgroundColor: '#d9e9ff',
            }}
        >
            <Box
                sx={{
                    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                    width: '800px',
                    margin: '0 auto',
                    textAlign: 'center',
                    backgroundColor: 'white',
                }}
            >
                <Box paddingTop="50px">
                    <Typography variant="h4" gutterBottom>
                        Welcome back, {`${user.firstName} ${user.lastName}`}
                    </Typography>
                    <Box height="20px" />
                    <Typography variant="h5" gutterBottom>
                        Calories goal: 100 / {user.calorieGoal}
                    </Typography>
                    <BorderLinearProgress variant="determinate" value={50} />
                </Box>
            </Box>
        </Box>
    );
}