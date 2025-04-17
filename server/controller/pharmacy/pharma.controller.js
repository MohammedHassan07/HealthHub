const phamraModel = require('../../models/pharma.model')
const { generate_password, compare_password } = require('../../utils/hash')
const { generate_token } = require('../../utils/token')



// Create pharma profile
const create_pharma_profile = async (req, res) => {
    try {

        const {
            pharma_RN,
            pharma_name,
            pharma_mobile,
            owner_name,
            pharma_email,
            password,
            pharma_qualification
        } = req.body

        // console.log('create-profile -->', req.body)

        // hash password
        const hashPass = await generate_password(password)

        const attached_hospitalId = req.id
        const pharma_data = new pharmaModel({
            attached_hospitalId,
            pharma_RN,
            pharma_name,
            pharma_mobile,
            owner_name,
            password: hashPass,
            pharma_image: `${req.file.filename}`,
            pharma_email,
            pharma_qualification
        })

        const saved_data = await pharma_data.save()
        res.status(201).json({
            "status": 201,
            "message": "User registered successfully."
        })

    } catch (error) {

        console.log('crearte pharma profile --> ', error)
        res.status(500).json({
            "status": 500,
            "error": "Internal Server Error",
            "message": "An error occurred while attempting to save the data. Please try again later."
        })
        return
    }
}

// Login pharma
const pharma_login = async (req, res) => {

    try {

        const {
            pharma_RN,
            password } = req.body

        // console.log('pharma-logIn --> ', req.body)

        const pharma_data = await pharmaModel.findOne({ pharma_RN: pharma_RN })
        if (!pharma_data) {

            return res.status(404).json({
                "status": 404,
                "error": "Not Found",
                "message": "The requested data was not found."
            })
        }

        // console.log('login --> ', pharma_data)

        // check password
        const verified = await compare_password(password, pharma_data.password)
        if (!verified) {

            res.status(402).json({
                "status": 401,
                "error": "Unauthorized",
                "message": "Invalid credentials. Please check your username and password and try again."
            })
            return
        }

        // generate token
        const token = await generate_token(pharma_data._id)
        if (!token) {

            res.status(500).json({
                "status": 500,
                "error": "Internal Server Error",
                "message": "An error occurred while attempting to save the data. Please try again later."
            })
            return
        }
        res.status(200).json({
            "status": 200,
            "message": "Login successful.",
            "data": {
                "username": pharma_RN,
                "token": token
            }
        })

    } catch (error) {

        console.log('login pharma --> ', error)
        res.status(500).json({
            "status": 500,
            "error": "Internal Server Error",
            "message": "An error occurred while attempting to save the data. Please try again later."
        })
    }
}

const view_pharma = async (req, res) => {

    try {

        const pharmaFilter = req.params.RN

        const pharma = await phamraModel.find({

            $or: [
                {pharma_RN: pharmaFilter},
                {pharma_name: pharmaFilter}
            ]
        })

        if (!pharma || pharma.length === 0) {

            res.status(404).json({

                "error": "Not Found",
                "message": "The requested data was not found."
            })
            return
        }

        res.status(200).json({
            "message": "Data Found",
            "data": pharma
        })

    } catch (error) {
        console.log('login pharma --> ', error)
        res.status(500).json({
            
            "error": "Internal Server Error",
            "message": "An error occurred while attempting to save the data. Please try again later."
        })
    }
}

module.exports = {
    create_pharma_profile,
    pharma_login,
    view_pharma
}