const express = require('express');
const router = express.Router();
const deals = require('../data/deals');

router.get('/', (req, res) => {
  res.json(deals);
});

module.exports = router;
