const express = require('express');
const app = express();

const dishes = [
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

app.get('/api/dish', (req, res) => {
  res.send(dishes);
});

app.get('/api/dish/:type', (req, res) => {
  const dish = dishes.find(
    (h) => h.province.price === parseInt(req.params.province.price)
  );
  if (!dish) return res.status(404).send('Record not found.');
  res.send(dish);
});

app.listen(3000, () => console.log('Listening on port 3000'));
