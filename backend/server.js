const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('¡El servidor está funcionando!');
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'tu_contraseña',
    database: 'simulador-futbol'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conexión a la base de datos establecida');
});

app.get('/equipos', (req, res) => {
    const sql = 'SELECT * FROM equipos';
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al recuperar equipos' });
            throw err;
        }
        res.json(result);
    });
});

