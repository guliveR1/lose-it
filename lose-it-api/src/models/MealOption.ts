import { DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { connectionPool } from "../database";

export class MealOption extends Model<InferAttributes<MealOption>, InferCreationAttributes<MealOption>> {
    declare type: string;
    declare displayName: string;
    declare priority: number;
};

MealOption.init({
    type: { type: DataTypes.STRING, primaryKey: true },
    displayName: { type: DataTypes.STRING },
    priority: { type: DataTypes.NUMBER },
}, { sequelize: connectionPool, tableName: 'meal_options' })
