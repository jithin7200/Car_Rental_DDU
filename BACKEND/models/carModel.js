const mongoose =require ('mongoose')

const carModel = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})