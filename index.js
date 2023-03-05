import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
const route = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
import reqfilter from "./middleware.js"
const publipath = path.join(__dirname , "public");
const app = express();
//change
route.use(reqfilter);
//change end
app.get('/',(req,res)=>{
    res.send('Home page');
});
//changes
route.get('/about',(req,res)=>{
    res.send("about page");
});
route.get('/contact',(req,res)=>{
    res.send("contact page");
});
//changes end

//changes
app.use("/",route);
//changes end
app.get("*",(req,res)=>{
    res.sendFile(`${publipath}/notfound.html`);
})

app.listen(3000, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", 3000);
})

