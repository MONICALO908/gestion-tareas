const express = require('express');
const listViewRouter = express.Router();


listViewRouter.get('/completed', (req, res) => {
  res.send('Lista de tareas completas');
});


listViewRouter.get('/incomplete', (req, res) => {
  res.send('Lista de tareas incompletas');
});

module.exports = listViewRouter;
