import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DialogType } from "../../types/dialog.type";

type DialogState = {
    isOpen: boolean;
    type?: DialogType;
}

const initialState: DialogState = {
    isOpen: false,
}

export const dialogSlice = createSlice({
    name: 'dialog',
    initialState,
    reducers: {
        openDialog: (state, action: PayloadAction<DialogType>) => {
            state.type = action.payload;
            state.isOpen = true;
        },
        closeDialog: (state) => {
            state.type = null;
            state.isOpen = false;
        },
    }
});

export const {
    openDialog,
    closeDialog,
} = dialogSlice.actions;