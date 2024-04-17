const express=require('express');

const app=express();


const Port=process.env.PORT || 8080;


app.get("/",(req,res)=>{
    return res.json({msg:"Moye Moye Moye Moye For Container"});
});




app.listen(Port,()=>{
    console.log(`server started at Port: ${Port}`);
});