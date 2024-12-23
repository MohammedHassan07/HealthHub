const express = require('express')
const imageUpload = require('../../middlewares/imageUpload')
const isEmpty = require('../../middlewares/isEmpty')
const isUnique = require('../../middlewares/isUnique')
const { create_patient_profile } = require('../../controller/patient/patient.controller')

const patient_route = express.Router()

patient_route.post('/create-profile',
    
    imageUpload.single('image'), 
    isEmpty,
    isUnique,
    create_patient_profile
)


module.exports = patient_route
