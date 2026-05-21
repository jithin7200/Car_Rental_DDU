import React from 'react'
import GetCar from '../HeroPage/GetCar'
import { Route ,Routes } from "react-router-dom";

function CarRoute() {
  return (
    <div>
    
      <Routes>
         <Route path = '/get' element={<GetCar></GetCar>}></Route>
      </Routes>

    </div>
  )
}

export default CarRoute