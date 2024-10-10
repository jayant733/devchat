//const {userauth} = require("../Middlewares/auth.js")
//this is the starting point of the applicaiton

//first step we need to create a backedn

const express = require("express");
const User = require("../src/models/user.js")
const app = express();
const {connectDB }= require('./config/database.js')


//creating a new instance of the data and saving the data setup 
app.post("/signup", async (req,res)=> {
    const userObject = {
        firstName : "Jayant ",
        lastName :"Sharma",
        emailId : "jayantsharma3228@gmail.com",
        password : "jayants",
       // _id : "505096065975957096478605" //we can also add custom ids but dont modify the ids but never mess up 
    }
    //mongo db itself created a object id and as well as __v by defualt they are uniquely created 
   //whenever you are using some db operation always try to put them inside the try catch block 
   try {
    const user = new User(userObject) //creating a new instance of the user model and new the name of the model and the data 
    await user.save() //.sabe will return u a promise and will store a data in database 
    console.log("user send  ")
    res.send("user added successfully ") //most of the mongoose will return a promise 
   } catch(err){
    console.log(err)
    res.status(400).send(err.message)
   }
  
})


//connectdb is a function so function pe hi .then .catch lagega ya fir try ya catch lagega 
connectDB().then(
    ()=> { 
        console.log("database connetion estabilished")
        //cluster connected 
        app.listen(3000, () => {
            console.log("serverS is running ");
          }); // this is the port where the server is runnning A
    }
).catch((err)=> {
    console.error("database cannot be connected ")
})

