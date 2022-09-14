import { Box, Card, CardContent } from "@mui/material"
import React from "react"

export const DailyTip = () => {
    return (
        <Box width="80%" margin="40px auto">
            <Card>
                <CardContent>
                    Tip of the day: Stay hydrated - try to drink a cup of water every half an hour
                </CardContent>
            </Card>
        </Box>
    )
}