import express from 'express'
import controller from '../controllers/plantas.controllers.js'
const {read} = controller

const router = express.Router()

router.get('/', read)
export default router