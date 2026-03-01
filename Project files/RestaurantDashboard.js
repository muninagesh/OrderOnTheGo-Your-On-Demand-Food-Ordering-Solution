import React,{useState} from 'react';
import axios from 'axios';

export default function RestaurantDashboard(){
 const [name,setName]=useState('');

 const addRestaurant=async()=>{
  await axios.post('http://localhost:5000/api/restaurants/add',
  {name},
  {headers:{Authorization:'Bearer '+localStorage.getItem('token')}});
  alert('Added');
 };

 return(
  <div>
   <h2>Restaurant Dashboard</h2>
   <input onChange={e=>setName(e.target.value)} placeholder='Restaurant Name'/>
   <button onClick={addRestaurant}>Add</button>
  </div>
 );
}
