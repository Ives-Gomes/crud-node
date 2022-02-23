const express = require('express');

const app = express();

app.use(express.json());

const names = ['Ives Moreira', 'Gabriely Evangelista'];

app.get('/names', (req, res) => {
  return res.json(names);
});

app.get('/names/:index', (req, res) => {
  const { index } = req.params;

  return res.json(names[index]);
});

app.post('/names', (req, res) => {
  const { name } = req.body;

  names.push(name);

  return res.json(names);
});

app.put('/names/:index', (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  names[index] = name;

  return res.json(names);
});

app.delete('/names/:index', (req, res) => {
  const { index } = req.params;

  names.splice(index, 1);

  return res.json({ message: 'The name has been deleted'});
});

app.listen(3333);