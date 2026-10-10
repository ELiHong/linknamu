export type Profile = {
  name: string;
  bio: string;
  image: string;
};

export type LinkItem = {
  /** 클릭 수 집계에 쓰이는 고유 키. 한 번 정하면 바꾸지 않는다. */
  id: string;
  title: string;
  url: string;
};

export const profile: Profile = {
  name: "김개발",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  image: "/profile.jpg",
};

export const links: LinkItem[] = [
  { id: "github", title: "🐙 깃허브", url: "https://github.com/ELiHong" },
  { id: "blog", title: "📝 블로그", url: "https://cafe.naver.ojsag" },
  { id: "email", title: "📬 이메일", url: "mailto:hiroad@naver.com" },
];
