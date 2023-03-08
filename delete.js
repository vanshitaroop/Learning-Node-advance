import dbConnect from "./mongodb.js";
const deleteData=async()=>{
    const data = await dbConnect();
    const result = await data.deleteMany({name:"vanshittta"});
    console.log(result);
}
deleteData();