module.exports = async function isUnique(req, res, next) {

    try {

        const { userType } = req.body

        const [model, registrationType] = getType(userType)

        // console.log('unique -->', model)

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
        hospital: require('../models/hospital.model')
    }
    const registrationType = {
        hospital: 'hospital_RN'
    }


    return [modelType[userType], registrationType[userType]]
}
