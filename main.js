
// main.js

const colors = require('colors');
const express = require('express');
const { connectDB } = require('./config/db');
const { Create_Student_Router } = require('./router/Create_Student_Router');
const { React_All_Student_Router } = require('./router/React_All_Student_Router');
const { Read_Student_By_Id_Router } = require('./router/Read_Student_By_Id_Router');
const { Update_Student_By_Id_Router } = require('./router/Update_Student_By_Id_Router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use(Create_Student_Router);

app.use(React_All_Student_Router);

app.use(Read_Student_By_Id_Router);

app.use(Update_Student_By_Id_Router);

const PORT = 7878; 

const startServer = async () => {

    await connectDB();

    app.listen(PORT, () => {

        console.log(`Server running on http://localhost:${PORT}`.bgGreen);
    })
}

startServer();


