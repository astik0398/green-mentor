const {connection} = require('./db')
const express = require('express')
require('dotenv').config()
const {userRouter} = require('./routes/user.route')
const {taskRouter} = require('./routes/task.route')
const cors = require('cors')

const app = express()
app.use(express())
app.use(express.json())
app.use(cors())

app.use('/user', userRouter)
app.use('/task', taskRouter)

app.listen(process.env.PORT, async()=> {
    try {
        await connection
        console.log('connected to the db');
        console.log('server running on port 9090');
    } catch (error) {
        console.log(error);
    }
})