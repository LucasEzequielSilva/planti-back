import express from "express"
import plantas from './plantas.routes.js'
import testimonials from './testimonials.routes.js'

const router = express.Router()

router.get("/", function (req, res, next) {
    res.send("planti server ready")
})

router.use('/plantas',plantas)
router.use('/testimonials',testimonials)

export default router