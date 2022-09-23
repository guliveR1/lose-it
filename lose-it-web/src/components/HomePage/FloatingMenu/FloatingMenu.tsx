import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material"
import React, { useCallback } from "react"
import ScaleIcon from '@mui/icons-material/Scale';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { useAppDispatch } from "../../../hooks/typed-redux";
import { openDialog } from "../../../features/user/dialogSlice";
import { DialogType } from "../../../types/dialog.type";

export const FloatingMenu = () => {
    const dispatch = useAppDispatch();

    const handleAddWeight = useCallback(() => {
        dispatch(openDialog(DialogType.ADD_WEIGHT));
    }, [dispatch]);

    const handleLogMeal = useCallback(() => {
        dispatch(openDialog(DialogType.MEAL_LOG));
    }, [dispatch]);

    return (
        <SpeedDial
            ariaLabel="Floating Menu"
            sx={{ position: 'fixed', bottom: 16, right: 16 }}
            icon={<SpeedDialIcon />}
        >
            <SpeedDialAction
                key={'Weigh In'}
                icon={<ScaleIcon />}
                tooltipTitle={'Weigh In'}
                onClick={handleAddWeight}
            />
            <SpeedDialAction
                key={'Log a meal'}
                icon={<RestaurantIcon />}
                tooltipTitle={'Log a meal'}
                onClick={handleLogMeal}
            />
            <SpeedDialAction
                key={'Add a workout'}
                icon={<FitnessCenterIcon />}
                tooltipTitle={'Add a workout'}
            />
        </SpeedDial>
    )
}