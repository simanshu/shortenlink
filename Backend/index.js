const express=require("express")
const mongodb=require("./config/mongoose")
const cors=require("cors")
const port=8080
const app=express()
app.use(express.json())
app.use(cors())

app.use('/auth', require('./routes/auth'));
app.use('/shortlink', require('./routes/shortLink'));

app.listen(port,()=>{
    console.log("Server Runing")

})
