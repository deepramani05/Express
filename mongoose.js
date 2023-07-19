const mongoose = require('mongoose');

let userSchema=mongoose.Schema({
    name:{ type:String , required:true},
    password:String
})

let user=mongoose.model('User',userSchema)
module.exports = user;