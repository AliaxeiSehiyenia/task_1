import express from 'express'
import mongoose from "mongoose";
import router from "./router.js";

mongoose.set('strictQuery', false)

const PORT = 5000

const DB_URL = 'mongodb://0.0.0.0:27017/task-1-db'

const app = express()
app.use(express.json())
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        console.log('DB connected')
        app.listen(PORT, () => console.log(`server started on port: ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

startApp()