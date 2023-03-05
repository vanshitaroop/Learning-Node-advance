import dbConnect from "./mongodb.js"
//option 1
// dbConnect().then((resp)=>{
//     resp.find({name:"vanshita"}).toArray().then((data)=>{
//         console.log(data);
//     })
// })
//option 2 modern
const main = async()=>{
    let data = await dbConnect();
    data = await data.find({name:"kanchan"}).toArray();
    console.warn(data)
} 
main();