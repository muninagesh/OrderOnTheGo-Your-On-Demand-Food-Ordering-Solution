import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function OrderTracking() {
  const [orders, setOrders] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(()=>{
    axios.get(`http://localhost:5000/api/orders/${user._id}`)
    .then(res=>setOrders(res.data));
  },[]);

  return (
    <div>
      <h2>Order Tracking</h2>
      {orders.map(o=>(
        <div key={o._id}>
          <p>Total: {o.totalAmount}</p>
          <p>Status: {o.status}</p>
        </div>
      ))}
    </div>
  );
}
