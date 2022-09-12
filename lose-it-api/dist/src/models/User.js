"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class User extends sequelize_1.Model {
}
exports.User = User;
;
User.init({
    email: { type: sequelize_1.DataTypes.STRING, primaryKey: true },
    firstName: { type: sequelize_1.DataTypes.STRING },
    lastName: { type: sequelize_1.DataTypes.STRING },
    dateOfBirth: { type: sequelize_1.DataTypes.DATE },
    initialWeight: { type: sequelize_1.DataTypes.NUMBER },
    height: { type: sequelize_1.DataTypes.NUMBER },
    gender: { type: sequelize_1.DataTypes.CHAR },
    password: { type: sequelize_1.DataTypes.STRING },
    onboarded: { type: sequelize_1.DataTypes.BOOLEAN },
}, { sequelize: database_1.connectionPool });
