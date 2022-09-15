import { DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { connectionPool } from "../database";

export class WeightHistory extends Model<InferAttributes<WeightHistory>, InferCreationAttributes<WeightHistory>> {
    declare userEmail: string;
    declare timestamp?: Date;
    declare weight?: number;
};

WeightHistory.init({
    userEmail: { type: DataTypes.STRING, primaryKey: true },
    timestamp: { type: DataTypes.DATE },
    weight: { type: DataTypes.NUMBER },
}, { sequelize: connectionPool, tableName: 'user_weight_history' })
