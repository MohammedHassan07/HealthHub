const doctorModel = require('../../models/doctor.model')
const { generate_password } = require('../../utils/hash')


// Create doctor profile
const create_doctor_profile = async (req, res) => {
    try {

        const {
            doctor_RN,
            doctor_name,
            doctor_mobile,
            doctor_password,
            doctor_gender,
            doctor_email,
            doctor_qualification
        } = req.body

        // console.log('create-profile -->', req.body)

        // hash password
        const hashPass = await generate_password(doctor_password)

        const attached_hospitalId = req.id
        const doctor_data = new doctorModel({
            attached_hospitalId,
            doctor_RN,
            doctor_name,
            doctor_mobile,
            doctor_password: hashPass,
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

module.exports = {
    create_doctor_profile
}