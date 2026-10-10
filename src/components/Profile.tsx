import Image from "next/image";
import type { Profile as ProfileData } from "@/data/profile";

export default function Profile({ profile }: { profile: ProfileData }) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={profile.image}
        alt={`${profile.name} 프로필 사진`}
        width={112}
        height={112}
        priority
        className="h-28 w-28 rounded-full object-cover ring-2 ring-black/10 dark:ring-white/15"
      />
      <h1 className="mt-5 text-2xl font-bold">{profile.name}</h1>
      <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400">
        {profile.bio}
      </p>
    </header>
  );
}
