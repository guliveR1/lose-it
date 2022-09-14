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
import { Box, Card, CardContent, Typography } from "@mui/material";

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
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const data = {
        labels,
        datasets: [
            {
                label: 'Weight',
                data: labels.map((_, index) => 100 + (index % 2 === 0 ? index : -index)),
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
                </CardContent>
            </Card>
        </Box>
    )
}