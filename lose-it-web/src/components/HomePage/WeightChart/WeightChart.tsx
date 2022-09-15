import React from "react"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Box, Card, CardContent, CircularProgress, Typography } from "@mui/material";
import { useAppSelector } from "../../../hooks/typed-redux";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const WeightChart = () => {
    const { isLoading, hasError, history } = useAppSelector(state => state.weightHistory);

    const labels = history?.map(({ timestamp }) => (new Date(timestamp)).toLocaleDateString());
    const data = {
        labels,
        datasets: [
            {
                label: 'Weight',
                data: history?.map(({ weight }) => weight),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)'
            },
        ],
    };

    return (
        <Box width="80%" margin="auto">
            <Card>
                <CardContent>
                    <Typography variant="h5">Your weight journey</Typography>
                    <Box height="20px" />
                    {!isLoading && !hasError && history &&
                        <Line
                            data={data}
                            options={{
                                plugins: {
                                    legend: {
                                        display: false
                                    }
                                }
                            }}
                        />
                    }
                    {isLoading && !hasError && <Box marginTop="10px">
                        <CircularProgress />
                    </Box>}
                    {hasError && 'Could not load weight history, try to refresh the page.'}
                </CardContent>
            </Card>
        </Box>
    )
}