"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";
import type { ClickCounts } from "@/lib/clicks";

type Props = {
  links: LinkItem[];
};

export default function LinkList({ links }: Props) {
  // 데이터를 받기 전에는 모든 카드가 0회로 보인다.
  const [clickCounts, setClickCounts] = useState<ClickCounts>({});

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/clicks", { signal: controller.signal, cache: "no-store" })
      .then((response) => (response.ok ? response.json() : {}))
      .then((counts: ClickCounts) => setClickCounts(counts))
      .catch(() => {
        // 조회에 실패해도 링크 자체는 그대로 쓸 수 있게 0회로 둔다.
      });
    return () => controller.abort();
  }, []);

  return (
    <ul className="flex flex-col gap-5">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard link={link} savedClicks={clickCounts[link.id] ?? 0} />
        </li>
      ))}
    </ul>
  );
}
