const mongoose = require('mongoose')
const connect = async()=>{
    mongoose.connect('mongodb://localhost:27017/myData')
    .then(()=> console.log('MongoDb Connected'))
    
}
module.exports = connect