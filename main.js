
// main.js

const colors = require('colors');
const express = require('express');
const { connectDB } = require('./config/db');
const { Create_Student_Router } = require('./router/Create_Student_Router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use(Create_Student_Router);



const PORT = 7878; 

const startServer = async () => {

    await connectDB();

    app.listen(PORT, () => {

        console.log(`Server running on http://localhost:${PORT}`.bgGreen);
    })
}

startServer();


