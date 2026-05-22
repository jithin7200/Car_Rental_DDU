const jwt = require('jsonwebtoken')

const authMiddleware = async(req,res,next)=>{
    const header = req.header('Autohrization')
    if(!header){
        return  res.status(400).json({ msg: "Please Login to continue" })
    }
    try {
        const token = header.split(" ")[1]
        const decodeToken = jwt.verify(token, process.env.SECRET_KEY)

             
        req.user=decodeToken
        next()
    } catch (error) {
        return res.status(401).json({ msg: "invalid token" ,error:error})
    }
}

module.exports= authMiddleware