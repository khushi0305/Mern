//import express
const express = require('express');                                 //backend me import karne k liye ye syntax use krte hain

//initialize express
const app = express();
const port = 5000;

app.get('/' , (req, res) => {
    res.send('response from express');
});

//home
app.get('/home' , (req, res) => {
    res.send('response from home');
});

//add
app.get('/add' , (req, res) => {
    res.send('response from add');
});

//getall
app.get('/all' , (req, res) => {
    res.send('response from all');
});

app.listen(port, () => {
    console.log('server started');
});