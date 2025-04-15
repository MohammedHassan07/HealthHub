const express = require('express')
const imageUpload = require('../../middlewares/imageUpload')
const isEmpty = require('../../middlewares/isEmpty')
const isUnique = require('../../middlewares/isUnique')
const { create_patient_profile, login_patient, view_patient } = require('../../controller/patient/patient.controller')
const { verify_jwt_token } = require('../../middlewares/verifyToken')

const patient_route = express.Router()

patient_route.post('/create-profile',
    
    imageUpload.single('image'), 
    verify_jwt_token,
    isEmpty,
    isUnique,
    create_patient_profile
)

patient_route.post('/login', isEmpty, login_patient)


patient_route.get('/view-patient/:RN', verify_jwt_token, view_patient)

module.exports = patient_route
