const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

let arr = [
  {id: 1, firstName: 'Anton1', lastName: 'Solodovnikov1'},
  {id: 2, firstName: 'Anton2', lastName: 'Solodovnikov2'},
  {id: 3, firstName: 'Anton3', lastName: 'Solodovnikov3'}
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send(arr);
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));