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
  name: "김클로",
  bio: "세계 최강 바이브코더",
  image: "/profile.svg",
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com/" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/" },
  { id: "blog", title: "Blog", url: "https://example.com/blog" },
];
