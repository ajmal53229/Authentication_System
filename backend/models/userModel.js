const mongoose = require('mongoose')
const userschema = mongoose.Schema({
    name: String,
    lastName : String,
    email: { type: String, required: true, unique: true },
    password : String,
    otp : String,
    isvarified : {
        type : Boolean,
        default : false
    }
})
const user = mongoose.model('user' , userschema)
module.exports = user