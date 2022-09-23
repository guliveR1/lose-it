import { ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from "@mui/material"
import React from "react"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingActionsIcon from '@mui/icons-material/PendingActions';

export type MealHeaderProps = {
    displayName: string;
    onClick: () => void;
}

export const MealHeader = ({ displayName, onClick }: MealHeaderProps) => {
    return (
        <ListItem disableGutters onClick={onClick}>
            <ListItemButton>
                <ListItemAvatar>
                    <CheckCircleIcon sx={{ color: 'green' }} />
                </ListItemAvatar>
                <ListItemText
                    primary={displayName}
                />
                <Typography variant="caption">150 cals</Typography>
            </ListItemButton>
        </ListItem>
    );
}