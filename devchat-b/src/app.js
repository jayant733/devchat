const {userauth} = require("../Middlewares/auth.js")
//this is the starting point of the applicaiton

//first step we need to create a backedn

const express = require("express");
const app = express();
//it creates an express application

//for handling the incoming requestion we create a request handler funciton

//if i change the order of the code then the test2 / help will give the output as hello from the help
// app.use("./test2/help", (req,res)=> {
//     res.send("hello from the help")  //see and play with route extension
// }) // this will still give the console log as hello 2 because the test2 will override the test2/help
// app.use("/test", (req,res)=> {
//     res.send("hello from the server")

// } )//this function is known as the request handler

// app.use("/test2", (req,res)=> {
//     res.send("hello 2");
// })

// app.use("./test2/help", (req,res)=> {
//     res.send("hello from the help")
// }) // this will still give the console log as hello 2 because the test2 will override the test2/help

app.use(
  "/user",
  (req, res, next) => {
    next();
    res.send("send1 ");
  },
  (req, res, next) => {
    res.send("CONSOLE.LOG");
  },
  (req, res, next) => {
    res.send("");
  }
);


app.use("/admin" , userauth, (req,res) => {
    res.send("data from the main send ")
}
)


app.get("/admin/getalldata", (req, res)=> {
    res.send("get all data is working ")
    }
)

app.listen(3000, () => {
  console.log("server is running ");
}); // this is the port where the server is runnning A
