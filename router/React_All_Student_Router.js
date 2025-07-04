
// React_All_Student_Router.js

const express = require('express');
const { React_All_Student_Controller } = require('../controller/React_All_Student_Controller');

const React_All_Student_Router = express.Router();

React_All_Student_Router.get("/read-all-student", React_All_Student_Controller);


exports.React_All_Student_Router = React_All_Student_Router;


