const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const auth = require('../middleware/authMiddleware');

router.get('/orders', auth, async(req,res)=>{
  const orders = await Order.find().populate('userId');
  res.json(orders);
});

router.put('/orders/:id', auth, async(req,res)=>{
  const updated = await Order.findByIdAndUpdate(req.params.id,{status:req.body.status},{new:true});
  res.json(updated);
});

module.exports = router;
