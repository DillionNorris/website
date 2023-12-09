const mongoose = require('mongoose');

const startMongo = async() => {
    mongoose
    .connect("mongodb://localhost")
    .then(()=>{
        console.log("connect to MongoDB Database");
    })
    .catch((error)=>{
        "error connecting to MongoDB Database".error;
    });
}

module.exports = startMongo;


