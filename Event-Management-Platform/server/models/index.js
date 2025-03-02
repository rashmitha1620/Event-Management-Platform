import 'dotenv/config.js'
import mongoose from 'mongoose'

const MONGODB_URL = process.env.MONGODB_URL
const MONGODB_DB = process.env.MONGODB_DB

const URL = `${MONGODB_URL}/${MONGODB_DB}`

mongoose.connect(URL)
.then(()=>console.log("Mongo DB Connected Successfully"))
.catch((err)=>console.log("Mongo DB Connection Failed" ,err))

export {mongoose}