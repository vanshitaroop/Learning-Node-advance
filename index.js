import { MongoClient } from "mongodb";
const url = "mongodb://localhost:27017";
const database = "testing";
const client = new MongoClient(url);

async function getData()
{
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection("test");
    let response = await collection.find({}).toArray();
    console.log(response);
}

getData();