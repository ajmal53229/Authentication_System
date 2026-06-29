require('dotenv').config();
const path = require('path')
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
const user = require('../models/userModel')
const jwt = require('jsonwebtoken')

console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const transporter = nodemailer.createTransport({
    service : 'gmail',
    
    auth:{
        user: process.env.EMAIL_USER,
        pass : process.env.EMAIL_PASS
    }
})

const newOTPRender =(req,res)=>{
res.sendFile(path.join(__dirname , '../../frontend' , 'newOtpvarify.html'))
}


const newpasswordRender =(req,res)=>{
res.sendFile(path.join(__dirname , '../../frontend' , 'newPassword.html'))
}

const signuRender =(req,res)=>{
res.sendFile(path.join(__dirname , '../../frontend' , 'sign-up.html'))
}
const loginRender = (req,res)=>{
res.sendFile(path.join(__dirname , '../../frontend' , 'login.html'))
}
const homeRender =  (req,res)=>{
res.sendFile(path.join(__dirname , '../../frontend' , 'home.html'))
}
const otpRender =  (req,res)=>{
res.sendFile(path.join(__dirname , '../../frontend' , 'varifyOTP.html'))
}
const signupPost =async(req,res)=>{
    const {name , lastName , email , password} = req.body
    const hashedPassword = await bcrypt.hash(password , 10)
    let isvarified
    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    await transporter.sendMail({
        from : 'ajmalbaltistani229@gmail.com',
        to : email,
        subject : 'OTP Varification',
        text: `your OTP is ${otp}`
    })
    try {
        const NewUser =await new user({
            name, lastName , email , otp , isvarified , password : hashedPassword
        })
        await NewUser.save()
        res.redirect(`/otp?email=${email}`)
    }
    catch (error) {
        res.send(error.message)
    }
}


// const JWT_SECRET = 'mysecretkey'
const loginPost = async(req,res)=>{
const {email , password} = req.body
try {
     const userfound =await user.findOne({email})
        if(!userfound){
            return res.send('user not found')
        }
    const match = await bcrypt.compare(
        password,
        userfound.password
    )
    if(!match){
        return res.send('Incorrect Password')
    }

    const token = jwt.sign(
            {
                id: userfound._id,
                email: userfound.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '1d'
            }
        )
        console.log(process.env.JWT_SECRET)


        res.cookie('token', token, {
            httpOnly: true
        })


        res.redirect('/home')
} 
catch (error) {
    res.send(error.message)
}
}


const newpasswordPost= async(req,res)=>{
    const {email , newPassword , conformPassword} = req.body
    const hashPassword =await bcrypt.hash( newPassword , 10)
    try {
        const PasswordMatch = bcrypt.compare(hashPassword , conformPassword)
        if(!PasswordMatch){
            return res.send('password not match')
        }
        const userfound= await user.findOne({email})
        if(!userfound){
            return res.send(' No user find')
        }
        userfound.password = hashPassword
        await userfound.save()
        res.redirect('/login')
    } 
    catch (error) {
        res.send(error.message)
    }
}


const logoutRander = (req, res) => {

    res.clearCookie('token')

    res.redirect('/login')

}

const forgot = async(req,res)=>{
const {email} = req.body
try {
     const userfound =await user.findOne({email})
        if(!userfound){
            res.send('user not found')
        }
    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    userfound.otp = otp
    await userfound.save()
    await transporter.sendMail({
        from : 'ajmalbaltistani229@gmail.com',
        to : email,
        subject : 'OTP Varification',
        text: `your OTP is ${otp}`
    })
        res.redirect(`/newotpRander?email=${email}`)

}
catch (error) {
    res.send(error.message)
}
}


const verifyOtpPost = async(req,res)=>{
    console.log(req.body)
    const {email ,userotp} = req.body
    try {
        const ismatch =await user.findOne({email})
        if(!ismatch){
            res.send('user not found')
        }
        if(userotp != ismatch.otp){
            res.send('otp not matched')
    }
        ismatch.otp = ""
        ismatch.isvarified = true
        await ismatch.save()
        res.redirect('/login')
    }


    catch (error) {
        res.send(error.message)
    }
}


const newOTPvarify = async(req,res)=>{
    console.log(req.body)
    const {email , userotp} = req.body
    try {
        const ismatch =await user.findOne({email})
        if(!ismatch){
            res.send('user not found')
        }
        if(userotp != ismatch.otp){
            res.send('otp not matched')
    }
        await ismatch.save()
        res.redirect(`/newPassword?email=${email}`)
    }


    catch (error) {
        res.send(error.message)
    }
}


module.exports = {loginRender , forgot , newpasswordRender, newpasswordPost ,newOTPRender , newOTPvarify , signuRender , logoutRander , homeRender , otpRender , signupPost ,loginPost, verifyOtpPost}