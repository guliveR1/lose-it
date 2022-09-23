import { Autocomplete, Box, CircularProgress, IconButton, TableCell, TableRow, TextField } from "@mui/material"
import React, { useEffect, useState } from "react";
import { useDebounce } from "../../../../../hooks/useDebounce";
import { getFoodOptions } from "../../../../../services/meal.service";
import { FoodOptions, MealFood } from "../../../../../types/meal.type";
import { FoodAutocompleteOption } from "../FoodRow/FoodRow";

export type FoodRowAutocompleteProps = {
    food: MealFood;
    selectedFood: FoodAutocompleteOption;
    onFoodSelect: (selectedFood: FoodAutocompleteOption) => void;
}

export const FoodRowAutocomplete = ({ onFoodSelect, selectedFood, food }: FoodRowAutocompleteProps) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const debouncedSearchTerm = useDebounce(searchTerm, 1000);
    const [isLoadingFoodOptions, setIsLoadingFoodOptions] = useState(false);
    const [foodOptions, setFoodOptions] = useState<FoodAutocompleteOption[]>([]);

    useEffect(() => {
        if (debouncedSearchTerm) {
            setIsLoadingFoodOptions(true);
            getFoodOptions(debouncedSearchTerm).then((foodOptions: FoodOptions) => {
                setFoodOptions(foodOptions.map(foodOption => ({
                    label: foodOption.food_name,
                    imageUrl: foodOption.photo.thumb,
                })));
                setIsLoadingFoodOptions(false);
            });
        }
    }, [debouncedSearchTerm]);

    return (food.edit ? (
        <Autocomplete
            freeSolo
            options={foodOptions}
            value={selectedFood}
            onChange={(_, newValue: FoodAutocompleteOption) => onFoodSelect(newValue)}
            renderInput={(params) => (
                <TextField
                    {...params}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    variant="standard"
                    size="small"
                    label="Choose food"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {isLoadingFoodOptions && <CircularProgress color="inherit" size={20} />}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
            sx={{ width: '200px' }}
            loading={isLoadingFoodOptions}
            renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    {option.imageUrl && <img
                        loading="lazy"
                        width="40"
                        src={option.imageUrl}
                        alt=""
                    />}
                    {option.label}
                </Box>
            )}
        />
    ) : <>{food.foodName}</>);
}