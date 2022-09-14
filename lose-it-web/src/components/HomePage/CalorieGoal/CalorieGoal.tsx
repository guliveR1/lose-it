import { Box, LinearProgress, linearProgressClasses, styled, Typography } from "@mui/material"
import React from "react"
import { useUser } from "../../../hooks/useCheckUser"

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

export const CalorieGoal = () => {
    const { user } = useUser();

    return (
        <Box margin="30px 0">
            <Typography variant="h5" gutterBottom>
                Calories goal: 1000 / {user.calorieGoal}
            </Typography>
            <BorderLinearProgress variant="determinate" value={50} />
        </Box>
    )
}