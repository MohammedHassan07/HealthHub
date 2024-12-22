const { generate_password } = require('../../utils/hash')
const hospitalModel = require('../../models/hospital.model')


// create hospital profile --> success
const create_hospital_profile = async (req, res) => {

    try {

        const {
            hospital_RN,
            hospital_name,
            hospital_address,
            hospital_mobile,
            hospital_password,
            hospital_description,
        } = req.body

        console.log('create-profile -->', req.body)

        // hash password
        const hashPass = await generate_password(hospital_password)
       
        const hospital_data = new hospitalModel({
            hospital_RN,
            hospital_name,
            hospital_address,
            hospital_mobile,
            hospital_password: hashPass,
            hospital_description,
            // hospital_image: req.file.filename TODO: Needs to implement image upload
            hospital_image: 'empty'
        })

        const saved_data = await hospital_data.save()
        res.status(201).json({ flag: true, message: 'Profile created successfully' })

    } catch (error) {

        console.log('crearte hospital profile --> ', error)
        res.status(500).json({ error: error.message, flag: false, message: 'Internal server error' })
        return
    }
}

module.exports = {
    create_hospital_profile
}