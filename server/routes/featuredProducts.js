const express = require('express');
const router = express.Router();

// Placeholder data (or import from data folder)
const featuredProducts = require('../data/FeaturedProduct');

router.get('/', (req, res) => {
  res.json(featuredProducts);
});

module.exports = router;
