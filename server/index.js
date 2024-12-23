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
const patient_route = require('./routes/patient.routes/patient.routes')
const doctor_routes = require('./routes/doctor.routes/doctors.routes')

app.use('/hospital', hospital_route)
app.use('/patient', patient_route)
app.use('/doctor', doctor_routes)