import { getClicksCollection } from "@/lib/mongodb";

export type ClickCounts = Record<string, number>;

/** 링크별 클릭 수를 조회한다. DB가 없거나 연결에 실패하면 빈 객체를 반환한다. */
export async function getClickCounts(): Promise<ClickCounts> {
  try {
    const collection = await getClicksCollection();
    if (!collection) return {};
    const docs = await collection.find().toArray();
    return Object.fromEntries(docs.map((doc) => [doc._id, doc.clicks]));
  } catch (error) {
    console.error("클릭 수 조회 실패:", error);
    return {};
  }
}

/** 클릭 수를 1 증가시킨다. DB가 설정되지 않았으면 false를 반환한다. */
export async function incrementClick(linkId: string): Promise<boolean> {
  const collection = await getClicksCollection();
  if (!collection) return false;
  await collection.updateOne(
    { _id: linkId },
    { $inc: { clicks: 1 } },
    { upsert: true },
  );
  return true;
}
