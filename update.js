import dbConnect from "./mongodb.js";
const updatedata=async()=>{
    const data = await dbConnect();
    const result = await data.updateOne({name:"vanshita"},{$set:{name:"The vanshita roopchandai"}});
    console.log(result);
}
updatedata();