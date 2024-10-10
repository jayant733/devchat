const mongoose = require("mongoose")


//we can also create directly wiriting const userSchema = new Schema 

const userSchema = new  mongoose.Schema({
    firstName : {
        type :String,

    },
    lastName: {
        type :String,

    },
    
    emailId : {    
        type :String,

    },
    
    age : {
        type :String,

    },
    
    gender : {
        type :String,

    },
    
    
})

const userModel = mongoose.model("User", userSchema)

module.exports = userModel