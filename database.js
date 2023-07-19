const mongoose = require('mongoose');

const conect=async()=>{
    await mongoose.connect("mongodb+srv://chiranjsutariya372:chiranj@cluster0.vzywpba.mongodb.net/?retryWrites=true&w=majority")

    console.log("done!");
}

module.exports = conect;