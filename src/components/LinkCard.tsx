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
      className="flex min-h-16 items-center justify-between gap-3 rounded-3xl border border-white/70 bg-white/45 px-6 py-4 shadow-[0_10px_30px_-14px_rgba(170,95,45,0.35)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/65 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400/70 active:translate-y-0 active:scale-[0.99] motion-reduce:transform-none dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_10px_30px_-14px_rgba(0,0,0,0.6)] dark:hover:bg-white/[0.1]"
    >
      <span className="truncate font-semibold tracking-tight">{link.title}</span>
      <span className="shrink-0 text-xs tabular-nums text-stone-500 dark:text-stone-400">
        클릭 {clicks.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
