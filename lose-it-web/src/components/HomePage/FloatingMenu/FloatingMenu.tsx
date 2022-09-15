import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material"
import React from "react"
import ScaleIcon from '@mui/icons-material/Scale';

export const FloatingMenu = () => {
    return (
        <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: 'absolute', bottom: 16, right: 16 }}
            icon={<SpeedDialIcon />}
        >
            <SpeedDialAction
                key={'Weigh In'}
                icon={<ScaleIcon />}
                tooltipTitle={'Weigh In'}
            />
        </SpeedDial>
    )
}