
// main.js

const colors = require('colors');
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


const PORT = 7878; 

const startServer = async () => {

    
    app.listen(PORT, () => {

        console.log(`Server running on http://localhost:${PORT}`.bgGreen);
    })
}

startServer();


