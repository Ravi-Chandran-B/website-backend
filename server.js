const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let tasks = [];

app.get('/api/tasks', (_, res) => res.json(tasks));

app.post('/api/tasks', (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'Text required' });
  const newTask = { id: uuidv4(), text };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.listen(port, () => console.log(`API running on port ${port}`));
