import dbConnect from "./mongodb.js"

const insertdata =  async()=>{
    const db = await dbConnect();
    const result = await db.insertOne({name:"vanshittta",age:20,clg:"LJ"});
    console.log(result);
}
// if(result)
insertdata();