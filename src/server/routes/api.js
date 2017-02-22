var express = require('express');
var router = express.Router();

var nextId = 1;

var items = [
  { id: nextId++, name: 'zero' },
  { id: nextId++, name: 'one' }
];

router.get('/data', function(req, res) {
  res.json(items);
});

router.post('/data', function(req, res) {
  const body = req.body;
  const name = body.name;

  if (!name) {
    res.status(400).send('Name is required');
    return;
  }

  const newItem = {
    id: nextId++,
    name: name
  }

  items.push(newItem);

  res.json(newItem);
});

router.delete('/data/:id', function(req, res) {
  const id = +req.params.id;
  const itemIndex = items.findIndex((item) => item.id === id);

  if (itemIndex === -1) {
    res.status(404).send('Item not found');
    return;
  }

  items.splice(itemIndex, 1);

  res.end();
});

module.exports = router;