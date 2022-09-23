import { Dialog, DialogContent, DialogTitle, Divider, Grid, List } from "@mui/material";
import React, { useCallback, useState } from "react";
import { closeDialog } from "../../../features/user/dialogSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/typed-redux"
import { Meal } from "./Meal/Meal";
import { MealHeader } from "./MealHeader/MealHeader";

export const MealLogDialog = () => {
    const { isOpen } = useAppSelector(state => state.dialog);
    const { mealOptions } = useAppSelector(state => state.meal);
    const [activeType, setActiveType] = useState('');
    const dispatch = useAppDispatch();

    const handleClose = useCallback(() => dispatch(closeDialog()), [dispatch]);

    return (
        <Dialog open={isOpen} onClose={handleClose} fullWidth>
            <DialogTitle>
                Select a Meal
            </DialogTitle>
            <Divider />
            <DialogContent>
                {!activeType && (
                    <Grid item xs={12} md={6}>
                        <List>
                            {mealOptions.map((mealOption, index) => (
                                <div key={mealOption.type}>
                                    {index > 0 && <Divider />}
                                    <MealHeader
                                        displayName={mealOption.displayName}
                                        onClick={() => setActiveType(mealOption.type)}
                                    />
                                </div>
                            ))}
                        </List>
                    </Grid>
                )}
                {activeType && <Meal type={activeType} onDone={() => setActiveType('')} />}
            </DialogContent>
        </Dialog>
    );
}