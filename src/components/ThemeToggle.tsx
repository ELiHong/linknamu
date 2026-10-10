"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  // 서버에서는 테마를 알 수 없으므로 마운트 후에 실제 상태를 읽는다.
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // 저장소를 쓸 수 없어도 현재 화면의 전환은 유지한다.
    }
    setIsDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "밝은 화면으로 전환" : "어두운 화면으로 전환"}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/45 text-lg shadow-[0_6px_18px_-10px_rgba(170,95,45,0.4)] backdrop-blur-xl transition duration-300 ease-out hover:bg-white/65 dark:border-white/10 dark:bg-white/[0.06] dark:shadow-none dark:hover:bg-white/[0.1]"
    >
      <span aria-hidden>{isDark === null ? "" : isDark ? "☀️" : "🌙"}</span>
    </button>
  );
}
