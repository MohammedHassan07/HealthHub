const { create_doctor_profile } = require('../../controller/doctor/doctor.controller')
const isEmpty = require('../../middlewares/isEmpty')
const isUnique = require('../../middlewares/isUnique')
const imageUpload = require('../../middlewares/imageUpload')
const express = require('express')
const { verify_jwt_token } = require('../../middlewares/verifyToken')

const doctor_routes = express.Router()

doctor_routes.post('/create-profile',
    imageUpload.single('image'),
    isEmpty,
    isUnique,
    verify_jwt_token,
    create_doctor_profile)

module.exports = doctor_routes