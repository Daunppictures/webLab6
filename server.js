const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

let arr = [
  {id: 1, firstName: 'Anton1', lastName: 'Solodovnikov1'},
  {id: 2, firstName: 'Anton2', lastName: 'Solodovnikov2'},
  {id: 3, firstName: 'Anton3', lastName: 'Solodovnikov3'}
];

let products = [
  {name: 'Iphone 12', description: 'Black, 128 Gb', price: 700, image: 'https://i.allo.ua/media/catalog/product/cache/1/image/600x415/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone-12-mini-black-select-2020_3.jpg'},
  {name: 'Iphone 12', description: 'Blue, 128 Gb', price: 700, image: 'https://i.allo.ua/media/catalog/product/cache/1/image/600x415/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone-12-mini-blue-select-2020_3.jpg'},
  {name: 'Iphone 12', description: 'Green, 128 Gb', price: 700, image: 'https://i.allo.ua/media/catalog/product/cache/1/image/600x415/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone-12-mini-green-select-2020_3.jpg'},
  {name: 'Iphone 12', description: 'White, 128 Gb', price: 700, image: 'https://i.allo.ua/media/catalog/product/cache/1/image/600x415/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone-12-mini-white-select-2020_3.jpg'}
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send(arr);
});

app.get('/api/products', (req, res) => {
  res.send(products);
});

app.listen(port, () => console.log(`Listening on port ${port}`));