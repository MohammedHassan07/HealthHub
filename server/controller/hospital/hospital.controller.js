const { generate_password, compare_password } = require('../../utils/hash')
const hospitalModel = require('../../models/hospital.model')
const { generate_token } = require('../../utils/token')

// create hospital profile --> success
const create_hospital_profile = async (req, res) => {

    try {

        const {
            hospital_RN,
            hospital_name,
            hospital_address,
            hospital_mobile,
            password,
            hospital_description,
        } = req.body

        // console.log(req.file)

        // console.log('create-profile -->', req.body)

        // hash password
        const hashPass = await generate_password(password)

        const hospital_data = new hospitalModel({
            hospital_RN,
            hospital_name,
            hospital_address,
            hospital_mobile,
            password: hashPass,
            hospital_description,
            hospital_image: `${req.file.filename}`,
        })

        const saved_data = await hospital_data.save()
        res.status(201).json({

            "message": "User registered successfully."
        })

    } catch (error) {

        console.log('crearte hospital profile --> ', error)
        res.status(500).json({

            "error": "Internal Server Error",
            "message": "An error occurred while attempting to save the data. Please try again later."
        })
        return
    }
}

// Login Hospital
const hospital_login = async (req, res) => {

    try {

        const {
            hospital_RN,
            password } = req.body

        // console.log('hospital-logIn --> ', req.body)

        const hospital_data = await hospitalModel.findOne({ hospital_RN: hospital_RN })
        if (!hospital_data) {

            return res.status(404).json({

                "error": "Not Found",
                "message": "The requested data was not found."
            })
        }

        // console.log('login --> ', hospital_data)

        // check password
        const verified = await compare_password(password, hospital_data.password)
        if (!verified) {

            res.status(401).json({

                "error": "Unauthorized",
                "message": "Invalid credentials. Please check your username and password and try again."
            })
            return
        }

        // generate token
        const token = await generate_token(hospital_data._id)
        if (!token) {

            res.status(500).json({

                "error": "Internal Server Error",
                "message": "An error occurred while attempting to save the data. Please try again later."
            })
            return
        }
        res.status(200).json({
            "username": hospital_RN,
            "token": token,
            "message": "Login successfull"
        })

    } catch (error) {

        console.log('login hospital --> ', error)
        res.status(500).json({

            "error": "Internal Server Error",
            "message": "An error occurred while attempting to save the data. Please try again later."
        })
    }
}

module.exports = {
    create_hospital_profile,
    hospital_login
}