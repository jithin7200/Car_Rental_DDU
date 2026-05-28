import React from 'react'
import GetCar from '../Pages/GetCar'
import { Route ,Routes } from "react-router-dom";
import LoginPage from '../Pages/Login';
import Register from '../Pages/Register';
import AdminDashboard from '../Pages/AdminDashboard';
import AddCar from '../Pages/AddCar';
import CarDetails from '../Pages/CarDetails';
import BookingPage from '../Pages/BookingPage';
//import Navbar from '../Components/Navbar';

function CarRoute() {
  return (
    <div>
    
      <Routes>

         <Route path = '/' element={<LoginPage/>}></Route>
         <Route path = '/get' element={<GetCar/>}></Route>
         <Route path = '/register' element={<Register/>}></Route>
         <Route path = '/admin' element={<AdminDashboard/>}></Route>
         <Route path = '/addCar' element={<AddCar/>}></Route>
         <Route path = '/CarDetails' element={<CarDetails/>}></Route>
         <Route path = '/Booking' element={<BookingPage/>}></Route>
         {/* <Route path = '/' element={<Navbar/>}></Route> */}

      </Routes>

    </div>
  )
}

export default CarRoute