import React, {useEffect,useState} from 'react';
import axios from 'axios';

export default function AdminDashboard(){
 const [orders,setOrders]=useState([]);

 useEffect(()=>{
  axios.get('http://localhost:5000/api/admin/orders',
  {headers:{Authorization:'Bearer '+localStorage.getItem('token')}})
  .then(res=>setOrders(res.data));
 },[]);

 return(
  <div>
   <h2>Admin Dashboard</h2>
   {orders.map(o=>(
    <div key={o._id}>
      <p>{o.totalAmount}</p>
      <p>{o.status}</p>
    </div>
   ))}
  </div>
 );
}
