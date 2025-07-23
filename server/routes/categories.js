const express = require('express');
const router = express.Router();
const categoryData = require('../data/categoryData');

router.get('/', (req, res) => {
  res.json(categoryData);
});

module.exports = router;
