import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { useUser } from "../../hooks/useCheckUser";
import { sagaActions } from "../../sagas/sagaActions";
import { DatePicker } from "../../shared-components/DatePicker";
import { WithSideImage } from "../../shared-components/WithSideImage"
import moment from 'moment';

export const Onboard = () => {
    const { user } = useUser();
    const dispatch = useDispatch();
    const [selectedGender, setSelectedGender] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(moment().startOf('day'));
    
    useEffect(() => {
        if (user && user.onboarded) {
            window.location.href = '/';
        }
    }, [user]);

    const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const firstName = data.get('firstName') as string || '';
        const lastName = data.get('lastName') as string || '';
        const initialWeight = data.get('initialWeight') as string || '';
        const height = data.get('height') as string || '';

        dispatch({
            type: sagaActions.ONBOARD_USER, payload: {
                firstName,
                lastName,
                dateOfBirth: dateOfBirth.toDate(),
                initialWeight,
                height,
                gender: selectedGender
            }
        });
    }, [selectedGender, dateOfBirth, dispatch]);

    return user && !user.onboarded && (
        <WithSideImage>
            <Typography variant="h3" gutterBottom>
                Welcome onboard
            </Typography>
            <Typography variant="h6" gutterBottom>
                In order to start using the app we need some details, lets get that weight lose started!
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} maxWidth="50%" sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="firstName"
                    label="First Name"
                    autoComplete="first-name"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="lastName"
                    label="Last Name"
                    autoComplete="last-name"
                />
                <Box height="15px" />
                <DatePicker 
                    value={dateOfBirth}
                    onChange={setDateOfBirth}
                    label="Date of birth"
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="initialWeight"
                    label="Weight (kg)"
                    type="number"
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="height"
                    label="Height (cm)"
                    type="number"
                />
                <Box height="15px" />
                <FormControl fullWidth>
                    <InputLabel id="gender-select-label">Gender</InputLabel>
                    <Select
                        labelId="gender-select-label"
                        id="gender-select"
                        name="gender-select"
                        value={selectedGender}
                        label="Gender"
                        onChange={(e) => setSelectedGender(e.target.value)}
                    >
                        <MenuItem value={'M'}>Male</MenuItem>
                        <MenuItem value={'F'}>Female</MenuItem>
                    </Select>
                </FormControl>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Start The Journey
                </Button>
            </Box>
        </WithSideImage>
    );
}