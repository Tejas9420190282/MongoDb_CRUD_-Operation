const { student } = require("../model/student_Scema");

const React_All_Student_Controller = async (req, res) => {
    try {
        
        const allStudent = await student.find();

        console.log('Student data featch successfully....'.bgYellow);
        
        res.status(200).json({
            success : true,
            message : 'Student data featch successfully....',
            allStudent : allStudent
        })

    } catch (error) {
        
        console.log(`Error in React_All_Student_Controller : ${error.message}`.bgRed);
        
        res.status(500).json({
            success : false,
            message : `Error in React_All_Student_Controller : ${error.message}`
        })
    }
}

exports.React_All_Student_Controller = React_All_Student_Controller;