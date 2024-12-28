const { generate_password, compare_password } = require('../../utils/hash')
const patientModel = require('../../models/patient.model')
const { generate_token } = require('../../utils/token')

// create patient profile --> success
const create_patient_profile = async (req, res) => {

    try {

        const {
            patient_RN,
            patient_name,
            patient_address,
            patient_mobile,
            password,
        } = req.body

        // console.log('create profile --> ',req.file)

        // console.log('create-profile -->', req.body)

        // hash password
        const hashPass = await generate_password(password)

        const patient_data = new patientModel({
            patient_RN,
            patient_name,
            patient_address,
            patient_mobile,
            password: hashPass,
            patient_image: `${req.file.filename}`,
        })

        const saved_data = await patient_data.save()
        res.status(201).json({
            "status": 201,
            "message": "User registered successfully."
        })

    } catch (error) {

        console.log('crearte patient profile --> ', error)
        res.status(500).json({
            "status": 500,
            "error": "Internal Server Error",
            "message": "An error occurred while attempting to save the data. Please try again later."
        })
        return
    }
}

const login_patient = async (req, res) => {
    try {

        const {
            patient_RN,
            password } = req.body

        // console.log('patient-logIn --> ', req.body)

        const patient_data = await patientModel.findOne({ patient_RN: patient_RN })
        if (!patient_data) {

            return res.status(404).json({
                "status": 404,
                "error": "Not Found",
                "message": "The requested data was not found."
            })
        }

        // console.log('login --> ', patient_data)

        // check password
        const verified = await compare_password(password, patient_data.password)
        if (!verified) {

            res.status(402).json({
                "status": 401,
                "error": "Unauthorized",
                "message": "Invalid credentials. Please check your username and password and try again."
            })
            return
        }

        // generate token
        const token = await generate_token(patient_data._id)
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
                "username": patient_RN,
                "token": token
            }
        })

    } catch (error) {

        console.log('login patient --> ', error)
        res.status(500).json({
            "status": 500,
            "error": "Internal Server Error",
            "message": "An error occurred while attempting to save the data. Please try again later."
        })
    }
}
module.exports = {
    create_patient_profile,
    login_patient
}