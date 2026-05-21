import React from 'react'
import GetCar from '../HeroPage/GetCar'
import { Route ,Routes } from "react-router-dom";
import LoginPage from '../auth/Login';

function CarRoute() {
  return (
    <div>
    
      <Routes>

         <Route path = '/' element={<LoginPage/>}></Route>
         <Route path = '/get' element={<GetCar/>}></Route>

      </Routes>

    </div>
  )
}

export default CarRoute