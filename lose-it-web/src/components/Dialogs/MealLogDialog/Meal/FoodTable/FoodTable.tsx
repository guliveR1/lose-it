import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import React from "react"
import { MealFoods } from "../../../../../types/meal.type";
import { FoodRow } from "../FoodRow/FoodRow";

export type FoodTableProps = {
    foods: MealFoods;
    onRowDelete: (index: number) => void;
    onRowEdit: (index: number) => void;
    onRowSave: (index: number, name: string, serving: number) => void;
}

export const FoodTable = ({ 
    foods, 
    onRowEdit, 
    onRowSave, 
    onRowDelete 
}: FoodTableProps) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 'bold' }}>Food Name</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Serving (g)</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Calories</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {foods.length > 0 && foods.map((food, index) => (
                        <FoodRow 
                            key={food.id}  
                            food={food}
                            onDelete={() => onRowDelete(index)}
                            onSave={(name: string, serving: number) => onRowSave(index, name, serving)}
                            onEdit={() => onRowEdit(index)}
                        />
                    ))}
                    {foods.length === 0 && (
                        <TableRow>
                            <TableCell colSpan={3}>
                                Start adding items to track your calorie consumption!
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}