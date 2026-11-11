import { MongoClient, type Db } from "mongodb";

const uri = process.env.MONGODB_URI?.trim();

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

function getClientPromise(): Promise<MongoClient> {
  if (!uri) {
    throw new Error("MONGODB_URI is not set in environment variables.");
  }

  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }

  return global._mongoClientPromise;
}

export async function getDb(dbName = "performacare"): Promise<Db> {
  const client = await getClientPromise();
  return client.db(dbName);
}
