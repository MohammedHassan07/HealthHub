const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({

    destination: (req, file, cb) => {

        const dest = path.join(__dirname, '/../images')
        return cb(null, dest)
    },

    filename: async (req, file, cb) => {

        if (file.mimetype !== 'image/png') {

            return res.status(402).json({
                "status": 402,
                "error": "Bad Request",
                "message": "check the file extension"
              })
        }

        console.log('image upload --> ', file)
        const { default: imageType } = await import('image-type');  // TODO: needs to handle file extension
        const type = imageType(file.buffer)
        const fileName = `${Date.now() + '-' + Math.round(Math.random())}.${type.ext}`
        return cb(null, fileName)

    }
})
const imageUpload = multer({ storage: storage })
module.exports = imageUpload

