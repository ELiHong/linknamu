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
        className="h-28 w-28 rounded-full object-cover ring-4 ring-white/80 shadow-[0_2px_6px_rgba(120,70,30,0.12),0_18px_36px_-12px_rgba(190,105,50,0.5)] dark:ring-white/15 dark:shadow-[0_2px_6px_rgba(0,0,0,0.4),0_18px_36px_-12px_rgba(0,0,0,0.7)]"
      />
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{profile.name}</h1>
      <p className="mt-2 max-w-[18rem] text-balance break-keep text-[15px] leading-relaxed text-stone-600 dark:text-stone-400">
        {profile.bio}
      </p>
    </header>
  );
}
