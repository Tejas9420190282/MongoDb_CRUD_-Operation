
const express = require('express');
const { Read_Student_By_Id_Controller } = require('../controller/Read_Student_By_Id_Controller');

const Read_Student_By_Id_Router = express.Router();

Read_Student_By_Id_Router.get("/read-student-data-by-id", Read_Student_By_Id_Controller)

exports.Read_Student_By_Id_Router = Read_Student_By_Id_Router;