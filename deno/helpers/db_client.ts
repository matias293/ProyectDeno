import { Database, MongoClient } from "https://deno.land/x/mongo@v0.26.0/mod.ts";

let db: Database

export const connect = async() => {
  const client = new MongoClient();

  await client.connect(
      "mongodb+srv://<username>:<password>@<db_cluster_url>/<db_name>?authMechanism=SCRAM-SHA-1",
    );
  
  const db = client.database("todo-app");
}

export function getDb(){
  return db
}

