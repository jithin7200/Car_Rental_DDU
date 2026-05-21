const Car = require('../models/carModel')

const createCar = async(req,res)=>{
    const {name,brand,model,year,fuelType,transmission,seats,rentPerDay,image,available,location} = req.body
    try {
        const newData = await new Car({
            name,
            brand  ,  
             model,
             year,
             fuelType,
             transmission,
             seats,
             rentPerDay,
             image,
             available,
             location
        })
        await newData.save()
        res.status(200).json({msg:"Register Sucessfully",data:newData})
    } catch (error) {
        console.log(error);
        
          res.status(500).json({msg:"server error"})
    }
}

const  getCar = async(req,res)=>{
      try {
        const posts = await Car.find().sort({createdAt:-1})
      res.status(200).json({msg:"All Cars",data:posts})
      } catch (error) {
        console.log(error);
        
          res.status(500).json({msg:"server error"})
      }
}

module.exports = {createCar , getCar}