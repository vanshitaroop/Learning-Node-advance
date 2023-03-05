import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const publipath = path.join(__dirname , "public");
const app = express();
// middleware 
//alse we cannot use res.send and next at the same time 
//next() is for passing  the control to the routes
const reqfilter=(req,res,next)=>{
    if(!req.query.age){
        res.send("please provide age");
    }
    else if(req.query.age<18)
    {
        res.send("you cannot access this page");
    }
    else{
        next();
    }
}
app.use(reqfilter);
//middleware over
app.get('/',(req,res)=>{
    res.send('Home page');
});
app.get('/about',(req,res)=>{
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

