
// Read_Student_By_Id_Controller.js

const { student } = require("../model/student_Scema");

const Read_Student_By_Id_Controller = async (req, res) => {
    try {
        
        const { id } = req.body;

        if ( !id ) {
            
            console.log(`All the inputs are Mandatory...`.bgRed);
            
            return res.status(404).json({
                success : false,
                message : `All the inputs are Mandatory...`
            })
        }

        const studentById = await student.findById( id );

        console.log(`Successfully featch student data by id....`.bgYellow);

        res.status(200).json({
            success : true,
            message : `All the inputs are Mandatory...`,
            studentById : studentById
        })

    } catch (error) {
        
        console.log(`Error in Read_Student_By_Id_Controller : ${error.message}`.bgRed);
        
        res.status(500).json({
            success : false,
            message : `Error in Read_Student_By_Id_Controller : ${error.message}`
        })   
    }
}

exports.Read_Student_By_Id_Controller = Read_Student_By_Id_Controller;

