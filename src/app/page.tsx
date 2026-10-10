import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/data/profile";
import { getClickCounts } from "@/lib/clicks";

// 클릭 수는 요청마다 최신 값을 보여준다.
export const dynamic = "force-dynamic";

export default async function Home() {
  const clickCounts = await getClickCounts();

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-5 pb-12 pt-4">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>
      <div className="mt-6">
        <Profile profile={profile} />
      </div>
      <div className="mt-8">
        <LinkList links={links} clickCounts={clickCounts} />
      </div>
    </main>
  );
}
