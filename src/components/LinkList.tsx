import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";
import type { ClickCounts } from "@/lib/clicks";

type Props = {
  links: LinkItem[];
  clickCounts: ClickCounts;
};

export default function LinkList({ links, clickCounts }: Props) {
  return (
    <ul className="flex flex-col gap-5">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard link={link} initialClicks={clickCounts[link.id] ?? 0} />
        </li>
      ))}
    </ul>
  );
}
