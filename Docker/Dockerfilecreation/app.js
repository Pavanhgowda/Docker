const express=require('express');
const app=express();
app.get('/',(req,res,next)=>{
    res.send('<h1>Welcome to express with docker</h1>');
})

app.listen(80,()=>{console.log("server started")});
