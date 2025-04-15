require('dotenv').config()  
const cors = require('cors')
const express = require('express')
const DB_connection = require('./Config/DB_connection')


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors({
  origin: '*'
}))

const port = process.env.PORT 

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
  DB_connection()
})

const hospital_route = require('./routes/hospital.routes/hospital.routes')
const patient_route = require('./routes/patient.routes/patient.routes')
const doctor_routes = require('./routes/doctor.routes/doctors.routes')
const pharma_route = require('./routes/pharmacy.routes/pharma.routes')

app.use('/api/hospital', hospital_route)
app.use('/api/patient', patient_route)
app.use('/api/doctor', doctor_routes)
app.use('/api/pharma', pharma_route)
