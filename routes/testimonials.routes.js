import express from 'express'
import controller from '../controllers/testimonials.controllers.js'
let {create} = controller

const router = express.Router()


router.post('/', create)
export default router