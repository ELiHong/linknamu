import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col px-6 pb-16 pt-5 sm:px-8 sm:pt-8">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>
      <div className="mt-8 sm:mt-10">
        <Profile profile={profile} />
      </div>
      <div className="mt-10">
        <LinkList links={links} />
      </div>
    </main>
  );
}
