const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi aplicación Express! Mi nombre es Joaquin. ');
});

app.get('/info', (req, res) => {
  res.send('Prueba #1. Esta es la sección de información.');
});

app.get('/contacto', (req, res) => {
  res.send('Prueba #2. Podés contactarme a joaquinsb@icloud.com');
});

app.listen(port, () => {
  console.log(`Prueba #3. Servidor corriendo en http://localhost:${port}`);
});
