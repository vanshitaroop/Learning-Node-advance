import express from "express";
const app = express();

app.get('/',(req,res)=>{
    res.send('Home page');
});
app.get('/about',(req,res)=>{
    res.send("about page");
});
app.listen(3000, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", 3000);
})

