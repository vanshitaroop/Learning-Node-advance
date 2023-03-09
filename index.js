import mongoose from "mongoose";

const main=async()=>{
    await mongoose.connect("mongodb://localhost:27017/testing");
    const studentachema = new mongoose.Schema({
        name:String,
        age:Number
    });
    const studentmodel = mongoose.model('tests',studentachema);
    let data =  new studentmodel({name:"The Vanshita roopchandani",clg:"LJIET"});
    let result = await data.save();
    console.log(result);

}
main();