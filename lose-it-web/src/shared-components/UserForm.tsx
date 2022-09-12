import { Alert, Avatar, Box, Button, Grid, Link, TextField, Typography } from "@mui/material"
import React, { useCallback, useMemo } from "react"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export type UserFormProps = {
    type: 'login' | 'register';
    onSubmit: (email: string, password: string) => void;
    errorMessage?: string;
}

export const UserForm = ({ onSubmit, errorMessage, type }: UserFormProps) => {
    const isLoginForm = useMemo(() => type === 'login', [type]);

    const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email') as string || '';
        const password = data.get('password') as string || '';

        onSubmit(email, password);
    }, [onSubmit]);

    return (
        <>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                {isLoginForm ? 'Sign in' : 'Register'}
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                {errorMessage && <>
                    <Box height="10px" />
                    <Alert severity="error">{errorMessage}</Alert>
                    <Box height="10px" />
                </>}
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="email"
                    label="Email Address"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    {isLoginForm ? 'Sign In' : 'Register'}
                </Button>
                <Grid container>
                    <Grid item xs>
                        {isLoginForm && (
                            <Link href="#" variant="body2">Forgot password?</Link>
                        )}
                    </Grid>
                    <Grid item>
                        <Link href={isLoginForm ? '/register' : '/login'} variant="body2">
                            {isLoginForm ? 'Don\'t have an account? Sign Up' : 'Already have an account? Sign In'}
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}