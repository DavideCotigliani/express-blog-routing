const express = require("express");
const app= express();
const port= 4000;
//asset statici
app.use(express.static('public'));

app.get("/",(req,res)=>{
    res.send("ciao a tutti")
})


app.listen(port,()=>{
    console.log(`app in ascolto alla porta ${port}`);
})