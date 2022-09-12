import { DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { connectionPool } from "../database";

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare email: string;
    declare firstName?: string;
    declare lastName?: string;
    declare dateOfBirth?: Date;
    declare initialWeight?: number;
    declare height?: number;
    declare gender?: string;
    declare password: string;
    declare onboarded?: boolean;
};

User.init({
    email: { type: DataTypes.STRING, primaryKey: true },
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    dateOfBirth: { type: DataTypes.DATE },
    initialWeight: { type: DataTypes.NUMBER },
    height: { type: DataTypes.NUMBER },
    gender: { type: DataTypes.CHAR },
    password: { type: DataTypes.STRING },
    onboarded: { type: DataTypes.BOOLEAN },
}, { sequelize: connectionPool })
