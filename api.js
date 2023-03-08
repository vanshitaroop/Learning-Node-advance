import express from "express";
import dbConnect from "./mongodb.js";

const app = express();
app.get("/",async(req,res)=>{
    const data = await dbConnect();
    let result = await data.find({}).toArray();
    // console.log(result);
    res.send(result);
});
app.listen(3000);