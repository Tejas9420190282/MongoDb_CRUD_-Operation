

const { student } = require("../model/student_Scema");

const Update_Student_By_Id_Controller = async (req, res) => {
    try {

        const { name, age, email, marks_obtain, id } = req.body;

        if ( !name || !age || !email || !marks_obtain || !id ) {
            
            console.log(`All the inputs are Mandatory...`.bgRed);
            
            return res.status(404).json({
                success : false,
                message : `All the inputs are Mandatory...`
            })
        }

        const studentExist = await student.findById(id);

        if (!studentExist) {
            
            console.log(`This student id is not present...`.bgRed);
            
            return res.status(404).json({
                success : false,
                message : `This student id is not present...`
            })
        }

        const updatedStudent = await student.findByIdAndUpdate(id, {
            name : name,
            age : age,
            email : email,
            marks_obtain : marks_obtain
        })

        console.log(`Student update successfully.....`.bgYellow);
        
        res.status(200).json({
            success : true,
            message : `Student update successfully.....`,
            updatedStudent : updatedStudent
        })

        
    } catch (error) {
        
        console.log(`Error in Update_Student_By_Id_Controller : ${error.message}`.bgRed);
        
        res.status(500).json({
            success : false,
            message : `Error in Update_Student_By_Id_Controller : ${error.message}`
        })
    }
}

exports.Update_Student_By_Id_Controller = Update_Student_By_Id_Controller;