require('dotenv').config()  
const DB_connection = require('./Config/DB_connection')

const express = require('express')
const app = express()

const port = process.env.PORT 

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
  DB_connection()
})
