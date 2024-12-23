require('dotenv').config()  
const express = require('express')
const DB_connection = require('./Config/DB_connection')


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT 

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
  DB_connection()
})

const hospital_route = require('./routes/hospital.routes/hospital.routes')

app.use('/hospital', hospital_route)