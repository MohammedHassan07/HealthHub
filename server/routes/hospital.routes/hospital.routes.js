const express = require('express')
const isEmpty = require('../../middlewares/isEmpty')
const { create_hospital_profile } = require('../../controller/hospital/hospital.controller')
const isUnique = require('../../middlewares/isUnique')
const imageUpload = require('../../middlewares/imageUpload')
const multer = require('multer')

const hospital_route = express.Router()
const upload = multer()
hospital_route.post('/create-profile',
    
    // TODO: Needs to implement image upload
    // upload.none(),
    imageUpload.single('image'), 
    isEmpty,
    isUnique,
    create_hospital_profile
)

hospital_route.post('/test', (req, res) => {
    console.log(req.body)
    res.send(req.body)

})

module.exports = hospital_route
