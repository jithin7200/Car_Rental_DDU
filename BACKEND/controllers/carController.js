const Car = require('../models/carModel')

const createCar = async(req,res)=>{
    const {name,brand,model,year,fuelType,transmission,seats,rentPerDay,image,available,location,mileage} = req.body
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
             location,
             mileage
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

// update
const updatPost = async(req,res)=>{
  try {
    const {id}=req.params
    // console.log("=================");
    //    console.log(req.params);
    //   console.log("=================");
    const updatPost=await Car.findByIdAndUpdate(id,req.body,{new:true})

    if(!updatPost){
      res.status(404).json({msg:"Post Not found "})
        }
        res.status(200).json({msg:'Updted Successfully ',updated:updatPost})
    
  } catch (error) {
    res.status(500).json({msg:"Server Error"})
  }
}

// delete
const deletePost = async(req,res)=>{
  try {
    const {id}=req.params
 
    
    const deletePost=await Car.findByIdAndDelete(id)

    if(!deletePost){
      res.status(404).json({msg:"Post Not found "})
        }
        res.status(200).json({msg:'Deleteed Successfully '})
    
  } catch (error) {
    res.status(500).json({msg:"Server Error"})
  } 
}
module.exports = {createCar , getCar , updatPost ,deletePost}