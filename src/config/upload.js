import multer from 'multer'
import path from 'path'

export default {
    storage : multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, res, cd) => {
            const ext = path.extname(file.originalmane);
            const name = path.basename(file.originalname, ext);
            cb(null, `${name}-${Date.now()}${ext}}`) 
        },
    })
}