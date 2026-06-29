const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const connection = require('./connection/connect')
const Router = require('./Routers/userRouter')
const cookieParser = require('cookie-parser')


app.use(cookieParser())
app.use(express.static(path.join(__dirname , '../frontend')))
app.use(express.urlencoded({extended : false}))
app.use(express.json())

connection()
app.use('/' , Router)




app.listen(process.env.port , ()=> {
    console.log('runing')
})