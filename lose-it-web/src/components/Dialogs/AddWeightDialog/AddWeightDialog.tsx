import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import React, { useCallback, useState } from "react";
import { closeDialog } from "../../../features/user/dialogSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/typed-redux"
import { DatePicker } from "../../../shared-components/DatePicker";
import moment from 'moment';
import { sagaActions } from "../../../sagas/sagaActions";

export const AddWeightDialog = () => {
    const { isOpen } = useAppSelector(state => state.dialog);
    const dispatch = useAppDispatch();
    const [weight, setWeight] = useState(0);
    const [timestamp, setTimestamp] = useState(moment().startOf('day'));

    const handleClose = useCallback(() => dispatch(closeDialog()), [dispatch]);
    const handleSave = useCallback(() => {
        dispatch({ type: sagaActions.ADD_WEIGHT, payload: { weight, timestamp} });
        dispatch(closeDialog());
    }, [dispatch, weight, timestamp]);

    return (
        <Dialog open={isOpen} onClose={handleClose}>
            <DialogTitle>Weigh In</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    In order to see your progress and get motivation it is highly recommended that you weigh in at least once a week, so how much do we weigh today?
                </DialogContentText>
                <Box height="20px" />
                <TextField
                    autoFocus
                    margin="dense"
                    label="Weight (kg)"
                    type="number"
                    fullWidth
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    variant="standard"
                />
                <Box height="20px" />
                <DatePicker
                    value={timestamp}
                    onChange={setTimestamp}
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSave}>Save</Button>
            </DialogActions>
        </Dialog>
    );
}