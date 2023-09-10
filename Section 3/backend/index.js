//import express
const express = require('express');                                 //backend me import karne k liye ye syntax use krte hain

//initialize express
const app = express();
const port = 5000;

app.listen(port, () => {
    console.log('server started');
});