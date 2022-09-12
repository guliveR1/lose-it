"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDbConnection = void 0;
const sequelize_1 = require("sequelize");
let connectionPool;
const createDbConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!connectionPool) {
        const sequelize = new sequelize_1.Sequelize('lose_it', 'root', '123456', {
            host: 'localhost',
            dialect: 'mysql',
        });
        try {
            yield sequelize.authenticate();
            console.log('Mysql connection has been established successfully.');
            connectionPool = sequelize;
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
            process.exit();
        }
    }
    return connectionPool;
});
exports.createDbConnection = createDbConnection;
