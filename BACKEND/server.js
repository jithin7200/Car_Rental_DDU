const express = require('express')
const connectDb = require('./config/db')
const Router = require('./routes/userRoute')

const app = express()
connectDb()

const PORT = 3000

app.use(express.json())
app.use('/user',Router)


app.listen(PORT,()=>{
    console.log("SERVER RUNNING");
    
})