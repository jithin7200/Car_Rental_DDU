const mongoose= require('mongoose')

const userModel = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phoneNo:{
        type:Number,
        required:true
    },
    licenceNo:{
        type:String,
        required:true
    },
    licenceImg:{
        type:String,
        required:true
    }


}

)
const user =  mongoose.model('blog',userModel)


module.exports = user


