const express = require('express')
const isEmpty = require('../../middlewares/isEmpty')
const { create_hospital_profile, hospital_login } = require('../../controller/hospital/hospital.controller')
const isUnique = require('../../middlewares/isUnique')
const imageUpload = require('../../middlewares/imageUpload')

const hospital_route = express.Router()

hospital_route.post('/create-profile',
    
    imageUpload.single('image'), 
    isEmpty,
    isUnique,
    create_hospital_profile
)

hospital_route.post('/login', isEmpty, hospital_login)


module.exports = hospital_route
