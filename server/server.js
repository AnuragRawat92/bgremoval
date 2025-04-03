import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './config/mongodb.js'
const PORT=process.env.PORT||4000
const app=express()
 await connectDB()
app.use(express.json())
app.use(cors())
app.get('/',(req,res)=>{
res.send("Api working")
})
app.listen(PORT,()=>{
    console.log("server running")
})