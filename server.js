const http = require('http');
const host = '127.0.0.1';
const port = 3000;

const tasks = [
  { id: 1, description: 'Hacer la compra', completed: false },
  { id: 2, description: 'Estudiar Node.js', completed: true },
  { id: 3, description: 'Hacer ejercicio', completed: false },
];

const server = http.createServer((req, res) => {
  if (req.url === '/tasks' && req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(tasks));
  } else {
    res.statusCode = 404;
    res.end('Ruta no encontrada');
  }
});

server.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
