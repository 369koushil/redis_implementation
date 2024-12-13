import express from 'express'
import { createClient } from 'redis';
const app=express();
const client=createClient();
client.connect(); 

app.use(express.json());
app.post("/submit",async(req,res)=>{
    const {pId,uId,code,language}=req.body;
    try{
        await client.lPush("submission",JSON.stringify({pId,uId,code,language}))

    res.json({
        msg:"submited"
    })
    }catch(err){
        res.status(400).json({msg:err})
    }
})

app.listen(3000)