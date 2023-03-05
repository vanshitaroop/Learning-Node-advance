import { MongoClient } from "mongodb";
const url = "mongodb://localhost:27017";
const database = "testing";
const client = new MongoClient(url);

async function dbConnect()
{
    let result = await client.connect();
    let db = result.db(database);
    return db.collection("test");
}
export default dbConnect;