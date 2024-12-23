const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({

    destination: (req, file, cb) => {

        const dest = path.join(__dirname, '/../images')
        return cb(null, dest)
    },

    filename: (req, file, cb) => {

        if (file.mimetype !== 'image/png') {

            return cb(new Error('Bad Request: Invalid file type. Only PNG images are allowed.'));

        }

        // TODO: needs to handle file extension
        // console.log('image upload --> ', file)
        // const { default: imageType } = await import('image-type');  
        // const type = imageType(file.buffer)

        // console.log(file)
        const fileName = `${Date.now()}-${Math.random()}.png`
        return cb(null, fileName)

    }
})
const imageUpload = multer({ storage: storage })
module.exports = imageUpload

