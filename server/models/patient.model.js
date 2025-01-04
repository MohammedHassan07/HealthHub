const { model, Schema } = require('mongoose')

const patinet_schema = new Schema({

    patient_RN: { type: String, required: true },
    password: { type: String, required: true },
    patient_name: { type: String, required: true },
    patient_address: { type: String, required: true },
    patient_mobile: { type: String, required: true },
    patient_image: { type: String, required: true },
    patient_age: { type: String, required: true },
    patient_gender: { type: String, required: true },

}, { timestamps: true })

const patientModel = model('patient', patinet_schema)

module.exports = patientModel
