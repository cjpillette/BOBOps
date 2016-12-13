const path = require('path');
const express = require('express');
const hbs = require('hbs');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.render('index.html');
});

// app.get('/kpi', (req, res) => {
//   res.render('index.html');
// });


app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
