import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,  // 'localhost'
    user: process.env.DB_USER,  // 'root'
    password: process.env.DB_PASSWORD,  // your password
    database: process.env.DB_NAME  // 'yourdatabase' - make sure this is the correct name
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database.');
});

export default db;