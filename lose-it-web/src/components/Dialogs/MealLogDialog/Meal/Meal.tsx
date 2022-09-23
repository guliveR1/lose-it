import { Box, Button } from "@mui/material"
import React, { useCallback, useState } from "react"
import { FoodTable } from "./FoodTable/FoodTable";
import { MealFoods } from "../../../../types/meal.type";
import { v4 as uuidv4 } from 'uuid';

export type MealProps = {
    type: string;
    onDone: () => void;
}

export const Meal = ({ type, onDone }: MealProps) => {
    const [tempFoods, setTempFoods] = useState<MealFoods>([]);

    const handleDeleteRow = useCallback((index: number) => {
        const tempFoodsCopy = [...tempFoods];
        tempFoodsCopy.splice(index, 1);

        setTempFoods(tempFoodsCopy);
    }, [tempFoods, setTempFoods]);

    const toggleEditMode = useCallback((index: number) => {
        const tempFoodsCopy = [...tempFoods];
        tempFoodsCopy[index].edit = true;

        setTempFoods(tempFoodsCopy);
    }, [tempFoods, setTempFoods]);

    const handleSaveRow = useCallback((index: number, name: string, serving: number) => {
        const tempFoodsCopy = [...tempFoods];
        tempFoodsCopy[index].foodName = name;
        tempFoodsCopy[index].servingSize = serving;
        tempFoodsCopy[index].edit = false;

        setTempFoods(tempFoodsCopy);
    }, [tempFoods, setTempFoods]);

    return (
        <>
            <Box marginBottom="20px">
                <FoodTable
                    foods={tempFoods}
                    onRowDelete={handleDeleteRow}
                    onRowEdit={toggleEditMode}
                    onRowSave={handleSaveRow}
                />
            </Box>
            <Button variant="outlined" fullWidth onClick={() => {
                setTempFoods([...tempFoods, { 
                    foodName: '', 
                    servingSize: 0, 
                    calories: 0, 
                    edit: true,
                    id: uuidv4(),
                }]);
            }}>Add Item</Button>
            <Box height="10px" />
            <Button variant="contained" fullWidth onClick={onDone}>Im Done</Button>
        </>
    );
}