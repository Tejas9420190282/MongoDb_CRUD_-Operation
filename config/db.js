const { default: mongoose } = require("mongoose");
const colors = require('colors');

const connectDB = async () => {
    try {
        
        await mongoose.connect(`mongodb://127.0.0.1:27017/task`)

        console.log(`Daabase connected successfully....`.bgGreen);     

    } catch (error) {
        
        console.log(`Error in Database creation : ${error.message}`.bgRed);     
    }
}

exports.connectDB = connectDB;