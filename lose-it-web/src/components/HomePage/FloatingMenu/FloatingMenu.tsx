import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material"
import React, { useCallback } from "react"
import ScaleIcon from '@mui/icons-material/Scale';
import { useAppDispatch } from "../../../hooks/typed-redux";
import { openDialog } from "../../../features/user/dialogSlice";
import { DialogType } from "../../../types/dialog.type";

export const FloatingMenu = () => {
    const dispatch = useAppDispatch();

    const handleAddWeight = useCallback(() => {
        dispatch(openDialog(DialogType.ADD_WEIGHT));
    }, [dispatch])

    return (
        <SpeedDial
            ariaLabel="Floating Menu"
            sx={{ position: 'absolute', bottom: 16, right: 16 }}
            icon={<SpeedDialIcon />}
        >
            <SpeedDialAction
                key={'Weigh In'}
                icon={<ScaleIcon />}
                tooltipTitle={'Weigh In'}
                onClick={handleAddWeight}
            />
        </SpeedDial>
    )
}