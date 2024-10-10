const userauth =  (req, res, next)=> {
    const token = "xyz"
    const isauthorized = token === "xyz"
    if(!isauthorized){
        res.send("unauthorized request")
    }
    else{
      console.log("authentication succesful")
        next()
    }
}

module.exports = {
    userauth
}