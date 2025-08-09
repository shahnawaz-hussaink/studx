// const express = require('express');
// const router = express.Router();
// const categoryData = require('../data/categoryData');

// router.get('/', (req, res) => {
//   res.json(categoryData);
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const Category = require("../models/category");

router.get("/", async(req,res)=>{
  try{
    const category = await Category.find();
    res.json(category);
  }
  catch(error){
    res.status(500).json({ message: "Error fetching deals", error });
  }
})

module.exports = router;