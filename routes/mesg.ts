import express from 'express'
import {handleToTranslate} from '../controllers/mesg.js'

const mesgRouter = express.Router()

mesgRouter.post('/translate',handleToTranslate)

export{
    mesgRouter
}