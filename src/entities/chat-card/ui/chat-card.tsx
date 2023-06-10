import Image from "next/image";
import Link from "next/link";

interface ChatCardProps {
  messages?: number;
  href: string;
}

export const ChatCard = ({ messages, href }: ChatCardProps) => {
  return (
    <Link href={href} className="flex gap-2.5 rounded-[10px] px-5 py-2.5 hover:bg-primary/40">
      <div className="relative h-[35px] w-[35px]">
        <Image fill src="/image/avatar.jpg" alt="Аватар" className="rounded-full object-cover" />
        <div className="absolute bottom-[2px] right-[2px] h-2.5 w-2.5 rounded-full border-[1px] border-solid border-neutral bg-primary" />
      </div>
      <div>
        <span className="block text-[13px] font-medium leading-4">Hte62623</span>
        <span className="block text-xs font-medium leading-[15px]">thebsfcgasfgvfaf</span>
      </div>
      <div className="relative ml-auto">
        <span className="block text-[10px] font-medium leading-[12px]">01:11</span>
        {messages && (
          <span className="absolute bottom-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px]">
            {messages}
          </span>
        )}
      </div>
    </Link>
  );
};
