const { model, Schema } = require('mongoose')

const pharma_schema = new Schema({

    pharma_RN: { type: String, required: true },
    pharma_name: { type: String, required: true },
    owner_name: { type: String, required: true },
    password: { type: String, required: true },
    pharma_mobile: { type: String, required: true },
    pharma_email: { type: String, required: true },
    pharma_qualification: { type: String, required: true },
    attached_hospitalId: { type: Schema.Types.ObjectId, required: true }

}, { timestamps: true })

const phamraModel = model('Pharmacist', pharma_schema)

module.exports = phamraModel 