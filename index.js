import express from 'express'

const PORT = 5000

const app = express()

async function startApp() {
    try {
        app.listen(PORT, () => console.log(`server started on port: ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

startApp()