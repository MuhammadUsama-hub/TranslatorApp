import express from 'express'
import {mesgRouter} from './routes/mesg.js'
import {userRouter} from './routes/userRouter.js'
import path from 'path'
const app = express()
const port = 5000 

//setting templating engine in express
app.set('view engine','ejs')

//setting ejs files folder to pick files
app.set('views',path.resolve('./views'))

// middleWare
app.use(express.urlencoded({extended:true}))

// routes
app.use('/mesg',mesgRouter)

app.use('/user',userRouter)


app.listen(port, () => {
    console.log(`server has started @ ${port}`)
  })