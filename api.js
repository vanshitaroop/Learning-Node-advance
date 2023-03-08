import express from "express";
import dbConnect from "./mongodb.js";

// const bodyparser = require('body-parser')
import bodyparser from "body-parser"
const app = express();
//body parser for parsing the data
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());

//routes
app.get("/",async(req,res)=>{
    const data = await dbConnect();
    let result = await data.find({}).toArray();
    // console.log(result);
    res.send(result);
});
app.post("/",async(req,res)=>{
    let data = await dbConnect();
    let result = await data.insertOne(req.body);
    res.send(result);

})
app.listen(3000);