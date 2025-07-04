
// Create_Student_Router.js 

const express = require('express');
const { Create_Student_Controller } = require('../controller/Create_Student_Controller');

const Create_Student_Router = express.Router();

Create_Student_Router.post("/student", Create_Student_Controller);

exports.Create_Student_Router = Create_Student_Router;


