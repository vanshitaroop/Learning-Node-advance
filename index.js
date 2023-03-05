import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
import reqfilter from "./middleware.js"
const publipath = path.join(__dirname , "public");
const app = express();
app.get('/',(req,res)=>{
    res.send('Home page');
});
app.get('/about',reqfilter,(req,res)=>{
    res.send("about page");
});
app.get("/about",(req,res)=>{
    res.sendFile(`${publipath}/about.html`);
})


app.get("*",(req,res)=>{
    res.sendFile(`${publipath}/notfound.html`);
})
app.listen(3000, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", 3000);
})

