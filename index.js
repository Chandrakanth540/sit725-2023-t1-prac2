const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/addnums', (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);

  console.log(num1, num2);

  res.send(`<h1>The addition of two numbers is ${num1 + num2}</h1>`);
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
