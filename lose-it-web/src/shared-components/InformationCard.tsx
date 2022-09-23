import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import React from "react"

export type InformationCardProps = {
    title: string;
    subtitle: string;
    imageUrl: string;
}

export const InformationCard = ({ title, subtitle, imageUrl }: InformationCardProps) => {
    return (
        <Card sx={{ display: 'flex', margin: "40px auto", width: "80%", justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {subtitle}
                    </Typography>
                </CardContent>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: 200 }}
                image={imageUrl}
                alt="Information Card Cover"
            />
        </Card>
    )
}