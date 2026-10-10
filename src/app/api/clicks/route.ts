import { NextResponse } from "next/server";
import { links } from "@/data/profile";
import { getClickCounts, incrementClick } from "@/lib/clicks";

// 클릭 수는 요청마다 최신 값을 돌려준다.
export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(await getClickCounts());
}

export async function POST(request: Request) {
  let id: unknown;
  try {
    ({ id } = await request.json());
  } catch {
    return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });
  }

  if (typeof id !== "string" || !links.some((link) => link.id === id)) {
    return NextResponse.json({ error: "존재하지 않는 링크입니다." }, { status: 404 });
  }

  try {
    const saved = await incrementClick(id);
    if (!saved) {
      return NextResponse.json(
        { error: "MONGODB_URI가 설정되지 않았습니다." },
        { status: 503 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("클릭 수 저장 실패:", error);
    return NextResponse.json({ error: "클릭 수 저장에 실패했습니다." }, { status: 500 });
  }
}
