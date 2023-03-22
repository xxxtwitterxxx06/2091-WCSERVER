const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('My food app!');
});

const foods = [
  {
    type: 'Sisig',
    province: 'Pampanga',
    price: 220,
  },
  {
    type: 'Salpicao',
    province: 'Quezon',
    price: 180,
  },
  {
    type: 'Bagnet',
    province: 'Ilocos',
    price: 370,
  },
];

app.get('/dishes', (req, res) => {
  res.send(foods);
});

app.get('/dishes/:type', (req, res) => {
  const food = foods.find((h) => h.type === parseInt(req.params.type));
  if (!food) return res.status(404).send('Record not found.');
  res.send(food);
});

app.listen(3000, () => console.log('Listening on port 3000'));
