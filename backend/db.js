import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();
const connectionString = process.env.MONGODB_CONNECTION_STRING;

async function connectToCustDatabase() {
  const client = new MongoClient(connectionString);
  await client.connect();
  return client.db('Customers');
}

async function getCustomerDetail() {
    // Connect to the database
    const db = await connectToCustDatabase();
    // console.log("Got req");
    
    // Use the find() method to retrieve the item(s) that match your query
    const items = await db.collection('CustDetails').find({}).toArray();
    
    // Return the retrieved item(s)
    return items;
}
  

export { connectToCustDatabase, getCustomerDetail };
