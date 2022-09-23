import { IconButton, TableCell, TableRow, TextField } from "@mui/material"
import React, { useState } from "react";
import { MealFood } from "../../../../../types/meal.type";
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { FoodRowAutocomplete } from "../FoodRowAutocomplete/FoodRowAutocomplete";

export type FoodRowProps = {
    food: MealFood;
    onDelete: () => void;
    onSave: (name: string, serving: number) => void;
    onEdit: () => void;
}

export type FoodAutocompleteOption = {
    label: string;
    imageUrl: string;
};

export const FoodRow = ({ food, onDelete, onSave, onEdit }: FoodRowProps) => {
    const [selectedFood, setSelectedFood] = useState<FoodAutocompleteOption>({ label: food.foodName, imageUrl: '' });
    const [tempServing, setTempServing] = useState(food.servingSize);

    return (
        <TableRow>
            <TableCell component="th" scope="row">
                <FoodRowAutocomplete
                    food={food}
                    selectedFood={selectedFood}
                    onFoodSelect={setSelectedFood}
                />
            </TableCell>
            <TableCell align="center">
                {food.edit ? (
                    <TextField
                        variant="standard"
                        size="small"
                        label="Serving (g)"
                        value={tempServing}
                        type="number"
                        sx={{ width: '70px' }}
                        onChange={(e) => setTempServing(Number(e.target.value))}
                    />
                ) : food.servingSize}
            </TableCell>
            <TableCell align="center">{food.calories === 0 ? '-' : food.calories}</TableCell>
            <TableCell>
                {food.edit ? (
                    <IconButton size="small" onClick={() => onSave(selectedFood.label, tempServing)}>
                        <SaveIcon fontSize="inherit" />
                    </IconButton>)
                    : (
                        <IconButton size="small" onClick={() => onEdit()}>
                            <EditIcon fontSize="inherit" />
                        </IconButton>
                    )}
                <IconButton size="small" onClick={() => onDelete()}>
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </TableCell>
        </TableRow>
    );
}

function useCallBack(arg0: () => void, arg1: any[]) {
    throw new Error("Function not implemented.");
}
