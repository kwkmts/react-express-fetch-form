const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

const multer = require('multer');
const upload = multer();

app.use(express.static('client/build'));
app.use(express.urlencoded({ extended: false }));

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.json({ greeting: `Hello ${name}!` });
});

app.post('/api/greeting', upload.none(), (req, res) => {
  const name = req.body.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.json({ greeting: `Hello ${name}!` });
});

app.listen(port, () => {
  console.log(`Express server is running on localhost:${port}`);
});
