import { MongoClient, type Collection } from "mongodb";

export type ClickDoc = {
  /** 링크 id (src/data/profile.ts의 LinkItem.id) */
  _id: string;
  clicks: number;
};

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB ?? "linknamu";

// 개발 모드의 HMR에서도 연결을 재사용하도록 전역에 캐시한다.
const globalForMongo = globalThis as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

function getClient(uri: string): Promise<MongoClient> {
  if (!globalForMongo._mongoClientPromise) {
    globalForMongo._mongoClientPromise = new MongoClient(uri, {
      serverSelectionTimeoutMS: 5000,
    })
      .connect()
      .catch((error) => {
        globalForMongo._mongoClientPromise = undefined;
        throw error;
      });
  }
  return globalForMongo._mongoClientPromise;
}

/** MONGODB_URI가 설정되지 않았으면 null을 반환한다. */
export async function getClicksCollection(): Promise<Collection<ClickDoc> | null> {
  if (!uri) return null;
  const client = await getClient(uri);
  return client.db(dbName).collection<ClickDoc>("clicks");
}
