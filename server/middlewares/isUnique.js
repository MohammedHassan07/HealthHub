module.exports = async function isUnique(req, res, next) {

    try {

        const { userType } = req.body

        const [model, registrationType] = getType(userType)

        // console.log('unique -->', model, req.body)

        const data = await model.findOne({ [registrationType]: req.body[registrationType] })

        // console.log('unique -->', data)

        if (data) {
            return res.status(409).json({
                status: 409,
                error: 'Conflict',
                message: 'A user with the provided details already exists.',
            })
        }

        next()
    } catch (error) {
        console.error('Error in isUnique Middleware:', error)
        res.status(500).json({
            status: 500,
            error: 'Internal Server Error',
            message: 'An error occurred while attempting to validate uniqueness. Please try again later.',
        })
    }
}

function getType(userType) {
    const modelType = {
        hospital: require('../models/hospital.model'),
        patient: require('../models/patient.model'),
        doctor: require('../models/doctor.model'),
        pharma: require('../models/pharma.model')
    }
    const registrationType = {
        hospital: 'hospital_RN',
        patient: 'patient_RN',
        doctor: 'doctor_RN',
        pharma: 'pharma_RN'
    }


    return [modelType[userType], registrationType[userType]]
}
