const express = require('express');
const { createPool } = require('mysql2/promise');
const { config } = require('dotenv');
const cors = require('cors');
config();

const app = express();
const pool = createPool({
    host: process.env.MYSQL_DB_HOST,
    user: process.env.MYSQL_DB_USER_ROOT,
    password: process.env.MYSQL_DB_PASSWORD_ROOT,
    port: process.env.MYSQL_DOCKER_PORT,
    database: process.env.MYSQL_DB
})

app.use(cors({
    origin: 'http://127.0.0.1:5500'
  }));

app.get("/equipos", async (req, res) => {
    const result = await pool.query('SELECT * FROM equipos');
    res.json(result[0]);
});


app.listen(process.env.NODE_DOCKER_PORT);
console.log('Server on port', process.env.NODE_DOCKER_PORT);
