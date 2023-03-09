import express from "express";
import dbConnect from "./mongodb.js";
import mongodb from "mongodb";
// const bodyparser = require('body-parser')
import bodyparser from "body-parser"
const app = express();
//body parser for parsing the data
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());
// alternative of body parser
// app.use(express().jason)
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
app.delete("/:id",async(req,res)=>{
    console.log(req.params.id);
    let data = await dbConnect();
    let result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id) });
    res.send(result);
})
app.listen(3000,()=>{
    console.log("Port listening on 3000");
});