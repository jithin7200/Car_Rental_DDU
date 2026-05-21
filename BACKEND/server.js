const express = require('express')
const connectDb = require('./config/db')
const userRouter = require('./routes/userRoute')
const carRouter = require('./routes/carRoute')
const cors = require('cors')


const app = express()
connectDb()

const PORT = 3000

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(express.json())
app.use('/user', userRouter)
app.use('/car', carRouter)


app.listen(PORT, () => {
    console.log("SERVER RUNNING on",PORT);

})