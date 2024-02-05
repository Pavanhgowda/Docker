const express=require('express');
const app=express();
app.get('/',(req,res,next)=>{
    res.send('Welcome to express with docker');
})

app.listen(3000,()=>{console.log("server started")});
