import React, { useEffect, useState } from 'react'
import { getdata } from '../API/CarApi'

function GetCar() {

   const [ data,setData  ] = useState([])
   
   useEffect(()=>{

    const fetchData = async()=>{
        const res = await getdata()

        setData(res.data)
        }
        fetchData()
    },[])
  return (
    <>
    
    {
        data.map((i,index)=>{
            <div key = {index}>
                <h1>{i.name}</h1>
                <p>{i.brand}</p>
                <p>{i.model}</p>
                <p>{i.year}</p>
                <p>{i.fuelType}</p>
                <p>{i.transmission}</p>
                <p>{i.seats}</p>
                <p>{i.rentPerDay}</p>
                <p>{i.available}</p>
                <p>{i.location}</p>
                
            </div>
        })
    }
    </>
    
  )
}

export default GetCar