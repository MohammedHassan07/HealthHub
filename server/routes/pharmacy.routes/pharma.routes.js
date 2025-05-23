const express = require('express')
const imageUpload = require('../../middlewares/imageUpload')
const isEmpty = require('../../middlewares/isEmpty')
const isUnique = require('../../middlewares/isUnique')
const { create_pharma_profile, pharma_login, view_pharma } = require('../../controller/pharmacy/pharma.controller')
const { verify_jwt_token } = require('../../middlewares/verifyToken')

const pharma_route = express.Router()

pharma_route.post('/create-profile',
    
    imageUpload.single('image'), 
    verify_jwt_token,
    isEmpty,
    isUnique,
    create_pharma_profile
)

pharma_route.post('/login', isEmpty, pharma_login)

pharma_route.get('/view-pharma/:RN', verify_jwt_token, view_pharma)

module.exports = pharma_route
