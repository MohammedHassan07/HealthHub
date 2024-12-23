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
            patient_password,
        } = req.body

        // console.log('create profile --> ',req.file)

        // console.log('create-profile -->', req.body)

        // hash password
        const hashPass = await generate_password(patient_password)

        const patient_data = new patientModel({
            patient_RN,
            patient_name,
            patient_address,
            patient_mobile,
            patient_password: hashPass,
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


module.exports = {
    create_patient_profile
}