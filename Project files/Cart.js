import React from 'react';
import axios from 'axios';

export default function Cart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const user = JSON.parse(localStorage.getItem('user'));

  const placeOrder = async () => {
    const order = {
      userId: user._id,
      products: cart,
      totalAmount: cart.reduce((a,c)=>a+c.price*c.quantity,0),
      deliveryAddress: user.address,
      paymentMethod: "COD"
    };
    await axios.post('http://localhost:5000/api/orders', order);
    alert('Order Placed');
  };

  return (
    <div>
      <h2>Cart</h2>
      {cart.map((item,i)=>(<p key={i}>{item.name} - {item.quantity}</p>))}
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
}
