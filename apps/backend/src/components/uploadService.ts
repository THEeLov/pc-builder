import path from "path"
import fs from "fs"
import multer from "multer"

const ensureDirExists = (dir: string) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
    }
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const date = new Date().toISOString().split("T")[0] // Get current date in YYYY-MM-DD format
        const uploadPath = path.join(__dirname, "images", date)
        ensureDirExists(uploadPath)
        cb(null, uploadPath)
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
})

const upload = multer({ storage: storage })

export default upload
