const express= require("express")
const app = express()
const port = 1000


app.get("/" , (req,res)=>{
    res.send("Hello node js")
})

app.listen(port ,()=>{
    console.log("connected sucessfully")
})