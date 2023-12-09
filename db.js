

const mongoose = require("mongoose");

const startMongo = async() => {
    mongoose
    .connect("mongodb+srv://danorris:<password>@cluster0.vafcrjz.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>{
        console.log("connect to MongoDB Database");
    })
    .catch((error)=>{
        "error connecting to MongoDB Database".error;
    });
}

module.exports = startMongo;


