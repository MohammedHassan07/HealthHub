const { model, Schema } = require('mongoose')

const hospital_schema = new Schema({

    hospital_RN: { type: String, required: true },
    password: { type: String, required: true },
    hospital_name: { type: String, required: true },
    hospital_address: { type: String, required: true },
    hospital_mobile: { type: String, required: true },
    hospital_image: { type: String, required: true },
    hospital_description: { type: String, required: true }

}, { timestamps: true })

const hospitalModel = model('hospital', hospital_schema)

module.exports = hospitalModel
