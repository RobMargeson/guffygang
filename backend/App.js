const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});


app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});
