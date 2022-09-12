import { CssBaseline, Grid, Paper } from '@mui/material';
import React from 'react';

export const WithSideImage = ({ children }) =>
    <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
                backgroundImage: 'url(https://source.unsplash.com/random)',
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            {children}
        </Grid>
    </Grid>