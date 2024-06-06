import { configDotenv } from "dotenv";
import mongodb from "mongodb";
configDotenv();

// random database stuff 😂
const MongoClient = mongodb.MongoClient;
const uri = process.env.MONGODB_KEY;
const client = new MongoClient(uri);

const dbName = "DRIVER-LICENSE-API";

const collectionName = "Questions";

const connectToDatabase = async () => {
  try {
    await client.connect();
    // console.log(`You connected to Database`);
  } catch (error) {
    console.log(`Error connecting to the database: ${error}`);
  }
};

// database collections
const questionsCollection = client.db(dbName).collection(collectionName);

export { client, connectToDatabase, questionsCollection };
