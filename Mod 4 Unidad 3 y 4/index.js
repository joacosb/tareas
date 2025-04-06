const express = require('express');
const app = express();
const port = 3000;

// Ruta raíz. La que me aparece cuando abro el puerto local.
app.get('/', (req, res) => {
  res.send('Usá la ruta /saludo/tu-nombre para recibir un saludo. También podés visitar /informacion o /contacto.');
});

// Ruta dinámica con parámetro en la URL
app.get('/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre;

  if (nombre.toLowerCase() === 'admin') {
    res.send('Hola Admin 👑. Tenés acceso privilegiado.');
  } else {
    res.send(`Hola ${nombre}, ¡bienvenido/a a Express!`);
  }
});

// Página de información. Funciona IUJUUU esta fue la primera que hice estatica.
app.get('/informacion', (req, res) => {
  res.send('Esta es la sección de información general sobre nuestra app Express.');
});

// Página de contacto
app.get('/contacto', (req, res) => {
  res.send('Podés contactarnos por correo a contacto@ejemplo.com');
});

//Esto vi ejemplos que lo suaban pero no termino de entender la funcion, sera solo para que aparezca en consola?
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
