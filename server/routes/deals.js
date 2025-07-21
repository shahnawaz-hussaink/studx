const express = require('express');
const router = express.Router();
const deals = require('../data/deals'); // import fake data

router.get('/', (req, res) => {
  res.json(deals); // send fake data as JSON
});

module.exports = router;
