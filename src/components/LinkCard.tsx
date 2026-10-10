"use client";

import { useState } from "react";
import type { LinkItem } from "@/data/profile";

type Props = {
  link: LinkItem;
  initialClicks: number;
};

export default function LinkCard({ link, initialClicks }: Props) {
  const [clicks, setClicks] = useState(initialClicks);

  const handleClick = () => {
    setClicks((count) => count + 1);
    // 새 탭으로 이동해도 요청이 끊기지 않도록 sendBeacon을 사용한다.
    const body = new Blob([JSON.stringify({ id: link.id })], {
      type: "application/json",
    });
    navigator.sendBeacon("/api/clicks", body);
  };

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="flex min-h-16 items-center justify-between gap-3 rounded-2xl border border-black/10 bg-white px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 dark:border-white/10 dark:bg-neutral-900"
    >
      <span className="truncate font-medium">{link.title}</span>
      <span className="shrink-0 text-xs tabular-nums text-neutral-500 dark:text-neutral-400">
        클릭 {clicks.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
