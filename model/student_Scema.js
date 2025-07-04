
// student_Scema.js

const { default: mongoose } = require("mongoose");

const student_Scema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Name is mandatory"]    //  The name field is mandatory, and if it is missing, Mongoose will throw a validation error with the custom message: "Name is required"
    },
    age : {
        type : Number,
        required : [true, "Age is mandatory"]    //  The age field is mandatory, and if it is missing, Mongoose will throw a validation error with the custom message: "Age is required"
    },
    email : {
        type : String,
        required : [true, "Email is mandatory"],    //  The email field is mandatory, and if it is missing, Mongoose will throw a validation error with the custom message: "Email is mandatory"
        unique : true,  // unique
        match : [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    marks_obtain : {
        type : Number,
        required : [true, "marks_obtain is mandatory"]
    },
    marks_out_of : {
        type : Number,
        default : 100
    }
}, { timestamps : true })

const student = mongoose.model(`student`, student_Scema);

exports.student = student;


