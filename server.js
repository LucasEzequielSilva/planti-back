import "dotenv/config.js"
import './config/database.js'

import { __dirname } from "./utils.js"
import cors from 'cors'
import express from 'express'
import indexRouter from "./routes/index.js"
import logger from "morgan"
import path from "path"

const app = express()
app.disable('etag')

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")))
app.use("/api", indexRouter)

export default app