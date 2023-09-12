import React from 'react'
import Home from '../pages/Home';   
import Login from '../pages/Login';
import Service from '../pages/Service';
import Signup from '../pages/Signup';   
import Contact from '../pages/Contact';
import DoctorDetails from '../pages/Doctors/DoctorDetails';
import Doctors from '../pages/Doctors/Doctors';


import {Routes, Route} from 'react-router-dom';

const Routers = () =>{
  return(
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/home' element={<Home/>}/> 
      <Route path='/login' element={<Login/>}/> 
      <Route path='/service' element={<Service/>}/> 
      <Route path='/doctors' element={<Doctors/>}/> 
      <Route path='/doctors/:id' element={<DoctorDetails/>}/> 
      <Route path='/contact' element={<Contact/>}/> 
      <Route path='/register' element={<Signup/>}/> 
      
    </Routes>
  )
}

export default Routers;