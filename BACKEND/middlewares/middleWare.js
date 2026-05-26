const jwt = require('jsonwebtoken')

const authMiddleware = async(req,res,next)=>{
    // const header = req.header('Authorization')
    // console.log(header);
    

    // if(!header){
    //     return  res.status(400).json({ msg: "Please Login to continue" })
       
        
    // }
    try {
        // const token = header.split(" ")[1]
        const token = req.cookies.token
        console.log(req.cookies);

        if(!token){
            return res.status(401).json({msg:"Not authenticated"})
        }
        
        const decodeToken = jwt.verify(token, process.env.SECRET_KEY)

             
        req.user=decodeToken
        next()
    } catch (error) {
        return res.status(401).json({ msg: "invalid token" ,error:error})
    }
}

module.exports= authMiddleware