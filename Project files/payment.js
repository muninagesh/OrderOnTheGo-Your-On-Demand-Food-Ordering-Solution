const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');

const razorpay = new Razorpay({
  key_id: 'YOUR_KEY_ID',
  key_secret: 'YOUR_SECRET'
});

router.post('/create-order', async(req,res)=>{
  const options = {
    amount: req.body.amount * 100,
    currency: 'INR'
  };
  const order = await razorpay.orders.create(options);
  res.json(order);
});

module.exports = router;
