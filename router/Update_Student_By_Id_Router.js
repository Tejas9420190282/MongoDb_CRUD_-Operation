
const express = require('express');
const { Update_Student_By_Id_Controller } = require('../controller/Update_STudent_By_Id_Controller');

const Update_Student_By_Id_Router = express.Router();

Update_Student_By_Id_Router.post("/update-student-by-id", Update_Student_By_Id_Controller);

exports.Update_Student_By_Id_Router = Update_Student_By_Id_Router;

