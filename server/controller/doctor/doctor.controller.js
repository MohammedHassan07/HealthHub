const doctorModel = require('../../models/doctor.model')
const { generate_password, compare_password } = require('../../utils/hash')
const { generate_token } = require('../../utils/token')



// Create doctor profile
const create_doctor_profile = async (req, res) => {
    try {

        const {
            doctor_RN,
            doctor_name,
            doctor_mobile,
            password,
            doctor_gender,
            doctor_email,
            doctor_qualification
        } = req.body

        // console.log('create-profile -->', req.body)

        // hash password
        const hashPass = await generate_password(password)

        const attached_hospitalId = req.id
        const doctor_data = new doctorModel({
            attached_hospitalId,
            doctor_RN,
            doctor_name,
            doctor_mobile,
            password: hashPass,
            doctor_gender,
            doctor_image: `${req.file.filename}`,
            doctor_email,
            doctor_qualification
        })

        const saved_data = await doctor_data.save()
        res.status(201).json({
            "status": 201,
            "message": "User registered successfully."
        })

    } catch (error) {

        console.log('crearte doctor profile --> ', error)
        res.status(500).json({
            "status": 500,
            "error": "Internal Server Error",
            "message": "An error occurred while attempting to save the data. Please try again later."
        })
        return
    }
}

// Login doctor
const doctor_login = async (req, res) => {

    try {

        const {
            doctor_RN,
            password } = req.body

        // console.log('doctor-logIn --> ', req.body)

        const doctor_data = await doctorModel.findOne({ doctor_RN: doctor_RN })
        if (!doctor_data) {

            return res.status(404).json({
                "status": 404,
                "error": "Not Found",
                "message": "The requested data was not found."
            })
        }

        // console.log('login --> ', doctor_data)

        // check password
        const verified = await compare_password(password, doctor_data.password)
        if (!verified) {

            res.status(402).json({
                "status": 401,
                "error": "Unauthorized",
                "message": "Invalid credentials. Please check your username and password and try again."
            })
            return
        }

        // generate token
        const token = await generate_token(doctor_data._id)
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
                "username": doctor_RN,
                "token": token
            }
        })

    } catch (error) {

        console.log('login doctor --> ', error)
        res.status(500).json({
            "status": 500,
            "error": "Internal Server Error",
            "message": "An error occurred while attempting to save the data. Please try again later."
        })
    }
}

const view_doctors = async (req, res) => {
    try {

        const doctorFilter = req.params.RN

        const doctors = await doctorModel.find({

            $or: [
                {doctor_RN: doctorFilter},
                {doctor_name: doctorFilter}
            ]
        })

        if (!doctors || doctors.length === 0) {

            res.status(404).json({

                "error": "Not Found",
                "message": "The requested data was not found."
            })
            return
        }

        res.status(200).json({
            "message": "Data Found",
            "data": doctors
        })

    } catch (error) {
        console.log('login doctors --> ', error)
        res.status(500).json({
            "status": 500,
            "error": "Internal Server Error",
            "message": "An error occurred while attempting to save the data. Please try again later."
        })
    }
}
module.exports = {
    create_doctor_profile,
    doctor_login,
    view_doctors
}