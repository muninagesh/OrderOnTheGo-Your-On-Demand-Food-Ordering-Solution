const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');
const auth = require('../middleware/authMiddleware');

router.post('/add', auth, async(req,res)=>{
  const restaurant = new Restaurant(req.body);
  await restaurant.save();
  res.json(restaurant);
});

router.get('/', async(req,res)=>{
  const data = await Restaurant.find();
  res.json(data);
});

module.exports = router;
