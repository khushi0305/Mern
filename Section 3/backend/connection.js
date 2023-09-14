const mongoose = require('mongoose');

const url = "mongodb+srv://khushi353:cXKfX47UexsP6gU@cluster0.bwxp2qu.mongodb.net/mydayabase?retryWrites=true&w=majority";


//asynchronous function - return Promise object
mongoose.connect(url)                       //promise object
.then((result) => {                        //thenc snippet
    console.log('database connected');
}).catch((err) => {
    console.log(err);
});

// console.log('Another statement');

module.exports = mongoose;