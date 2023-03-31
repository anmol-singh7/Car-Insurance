const mysql = require('mysql2/promise');

const HOST = process.env.HOST
const DATABASE = process.env.DATABASE_NAME;
const PASSWORD = process.env.PASSWORD;
const USER = process.env.USER_NAME;
const pool = mysql.createPool({
    host: HOST,
    user: USER,
    password: PASSWORD, 
    database: DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const getConnection = async () => {
    try {
        const connection = await pool.getConnection();
        console.log('Connected to the database!');
        return connection;
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        return null;
    }
};

module.exports =  {getConnection} ;