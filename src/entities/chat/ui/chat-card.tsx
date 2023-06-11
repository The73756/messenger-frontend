import Image from "next/image";
import Link from "next/link";

interface ChatCardProps {
  messages?: number;
  href: string;
}

export const ChatCard = ({ messages, href }: ChatCardProps) => {
  return (
    <Link href={href} className="flex gap-2.5 rounded-[10px] px-5 py-2.5 hover:bg-primary/40">
      <div className="relative h-9 w-9">
        <Image fill src="/image/avatar.jpg" alt="Аватар" className="rounded-full object-cover" />
        <div className="absolute bottom-0.5 right-0.5 h-2.5 w-2.5 rounded-full border-[1px] border-solid border-neutral bg-primary" />
      </div>
      <div className="flex-1 pr-2 overflow-hidden">
        <span className="block text-4 font-medium leading-4 truncate">thebsfcgasfgvfafthebsfcgasfgvfafthebsfcgasfgvfaf</span>
        <span className="block text-xs font-medium leading-4 truncate">thebsfcgasfgvfafthebsfcgasfgvfafthebsfcgasfgvfafthebsfcgasfgvfaf</span>
      </div>
      <div className="relative">
        <span className="block text-[10px] font-medium leading-3">01:11</span>
        {messages && (
          <span className="absolute bottom-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-3">
            {messages}
          </span>
        )}
      </div>
    </Link>
  );
};
