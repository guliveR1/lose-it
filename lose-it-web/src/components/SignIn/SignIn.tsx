import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { WithSideImage } from '../../shared-components/WithSideImage';
import { Alert } from '@mui/material';
import { useDispatch } from 'react-redux';
import { sagaActions } from '../../sagas/sagaActions';
import { useAppSelector } from '../../hooks';

export const SignIn = () => {
    const dispatch = useDispatch();
    const hasLoginError = useAppSelector(state => state.user.hasLoginError);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email') as string || '';
        const password = data.get('password') as string || '';

        dispatch({
            type: sagaActions.LOGIN, payload: {
                email,
                password,
            }
        });
    };

    return (
        <WithSideImage>
            <Box
                sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    {hasLoginError && <>
                        <Box height="10px" />
                            <Alert severity="error">The email or the password entered are incorrect!</Alert>
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
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">Forgot password?</Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">Don't have an account? Sign Up</Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </WithSideImage>
    );
}