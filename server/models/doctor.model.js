const { model, Schema } = require('mongoose')

const doctor_schema = new Schema({

    attached_hospitalId: [{ type: Schema.Types.ObjectId, required: true }],   // the hospital in which the doctor is practicing
    doctor_RN: { type: String, required: true },  
    doctor_name: { type: String, required: true },
    doctor_image: { type: String, required: true },
    password: { type: String, required: true },
    doctor_gender: { type: String, required: true },
    doctor_qualification: { type: String, required: true },
    doctor_mobile: { type: String, required: true },
    doctor_email: { type: String, required: true },

}, { timestamps: true })

const dcotorModel = model('doctor', doctor_schema)

module.exports = dcotorModel 