import dbConnect from "./mongodb.js"

const insertdata =  async()=>{
    const db = await dbConnect();
    const result = await db.insertMany([{name:"vanshittta",age:20,clg:"LJ"},
    {name:"vanshittta",age:20,clg:"LJ"},
    {name:"vanshittta",age:20,clg:"LJ"}
]);
    console.log(result);
}
// if(result)
insertdata();