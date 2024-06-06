import express from 'express'
import { randomQuestion } from '../controler/questionController.js'

const router = express.Router()

router.get('/', randomQuestion)


export default router