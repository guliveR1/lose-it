import { Box, Divider, Typography } from "@mui/material";
import React, { useEffect } from "react"
import { useUser } from "../../hooks/useCheckUser";
import { CalorieGoal } from "./CalorieGoal/CalorieGoal";
import { DailyTip } from "./DailyTip/DailyTip";
import { FloatingMenu } from "./FloatingMenu/FloatingMenu";
import { Meals } from "./Meals/Meals";
import { WeightChart } from "./WeightChart/WeightChart";
import { Workouts } from "./Workouts/Workouts";

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
                        Welcome back, {`${user.firstName} ${user.lastName}!`}
                    </Typography>
                    <Box height="20px" />
                    <Divider />
                    <CalorieGoal />
                    <Divider />
                    <Meals />
                    <Workouts />
                    <WeightChart />
                    <DailyTip />
                    <FloatingMenu />
                </Box>
            </Box>
        </Box>
    );
}