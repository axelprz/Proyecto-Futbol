const express = require('express');
const { createPool } = require('mysql2/promise');

const app = express();
const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'password_fuchibol',
    port: 3306,
    database: 'simulador_futbol'
})

app.get("/equipos", async (req, res) => {
    const result = await pool.query('SELECT * FROM equipos');
    res.json(result[0]);
});

app.listen(3000);
console.log('Server on port', 3000);