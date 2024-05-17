const express = require('express');
const app = express();
const port = 3000;

// Configura el middleware para analizar el cuerpo de las solicitudes JSON
app.use(express.json());

// Maneja las solicitudes de registro de usuarios
app.post('/signup', (req, res) => {
  // Aquí puedes agregar la lógica para manejar el registro de usuarios
  const { username, password, email, birthdate } = req.body;
  console.log('Received registration data:', { username, password, email, birthdate });
  // Aquí deberías agregar la lógica para guardar los datos del usuario en una base de datos, etc.
  res.sendStatus(200); // Envía una respuesta de éxito
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
