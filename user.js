const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        requre: true
    },
    password:{
        type: String,
        reqire: true
    }
  })

  module.exports = mongoose.model('User', UserSchema);