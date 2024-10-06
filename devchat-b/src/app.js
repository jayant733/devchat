//this is the starting point of the applicaiton 

//first step we need to create a backedn

const express = require("express")
const app = express()
//it creates an express application 

//for handling the incoming requestion we create a request handler funciton

app.use("/test", (req,res)=> {
    res.send("hello from the server")
   
} )//this function is known as the request handler 
app.use("/test2", (req,res)=> {
    res.send("hello 2");
})
app.listen(3000,()=> {
    console.log("server is running ")
})// this is the port where the server is runnning 