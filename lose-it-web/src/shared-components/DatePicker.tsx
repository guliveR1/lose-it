import React from "react";
import { LocalizationProvider, DesktopDatePicker } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { TextField } from "@mui/material";
import { Moment } from 'moment';

export type DatePickerProps = {
    value: Moment;
    onChange: (date: Moment) => void;
    label?: string;
    variant?: 'standard' | 'filled' | 'outlined';
}

export const DatePicker = ({ value, onChange, label, variant }: DatePickerProps) => {
    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <DesktopDatePicker
                label={label || "Date"}
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={onChange}
                renderInput={(params) => <TextField fullWidth variant={variant || 'outlined'} {...params} />}
            />
        </LocalizationProvider>
    )
}