import React from "react";
import { useAppSelector } from "../../hooks/typed-redux";
import { DialogType } from "../../types/dialog.type";
import { AddWeightDialog } from './AddWeightDialog/AddWeightDialog';
import { MealLogDialog } from "./MealLogDialog/MealLogDialog";

export const Dialogs = () => {
    const type = useAppSelector(state => state.dialog.type);

    return (
        <>
            {type === DialogType.ADD_WEIGHT && <AddWeightDialog />}
            {type === DialogType.MEAL_LOG && <MealLogDialog />}
        </>
    );
}