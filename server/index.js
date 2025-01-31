import express from 'express';
import mysql from 'mysql2';
import cors from 'cors'; 
import dotenv from 'dotenv';  // Import dotenv
import authRouter from './routes/authRoutes.js';

// Load environment variables from the .env file
dotenv.config();

const app = express();

// MySQL connection setup using environment variables
const db = mysql.createConnection({
    host: process.env.DB_HOST,       // Use DB_HOST from .env
    user: process.env.DB_USER,       // Use DB_USER from .env
    password: process.env.DB_PASSWORD,  // Use DB_PASSWORD from .env
    database: process.env.DB_DATABASE  // Use DB_DATABASE from .env
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.stack);
        return;
    }
    console.log('Connected to MySQL as id ' + db.threadId);
});

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

app.use('/auth', authRouter);

// Starting the server on the port defined in .env or default to 3000
app.listen(process.env.PORT || 3001, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT || 3001}`);
});