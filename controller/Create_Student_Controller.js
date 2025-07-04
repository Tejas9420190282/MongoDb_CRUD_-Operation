
// Create_Student_Controller.js

const { bgYellow } = require("colors");
const { student } = require("../model/student_Scema");

const Create_Student_Controller = async (req, res) => {
    try {

        const { name, age, email, marks_obtain } = req.body;

        if ( !name || !age || !email || !marks_obtain ) {
            
            console.log(`All the inputs are Mandatory...`.bgRed);
            
            return res.status(404).json({
                success : false,
                message : `All the inputs are Mandatory...`
            })
        }

        const isStudent = await student.findOne({ email });

        if (isStudent) {
            
            console.log(`account is already created for same EmailId...`.bgRed);

            return res.status(404).json({
                success : false,
                message : `account is already created for same EmailId...`
            })
        }

        const newStudent = await student.create({
            name : name,
            age : age,
            email : email,
            marks_obtain : marks_obtain
        });

        console.log(`New student created...`.bgYellow);

        res.status(200).json({
            success : true,
            message : "New student created successfully...",
            newStudent : newStudent,
        })
        
        
    } catch (error) {
        
        console.log(`Error in Create_Student_Controller : ${error.message}`.bgRed);
        
        res.status(500).json({
            success : false,
            message : `Error in Create_Student_Controller : ${error.message}`
        })
    }
}

exports.Create_Student_Controller = Create_Student_Controller


