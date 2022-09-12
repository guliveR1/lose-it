import { Sequelize } from 'sequelize';

export let connectionPool = new Sequelize('lose_it', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

export const tryToAuthenticate = async () => {
    try {
        await connectionPool.authenticate();
        console.log('Mysql connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit();
    }
};


