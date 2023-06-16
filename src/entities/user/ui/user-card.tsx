import Image from "next/image";
import Link from "next/link";

interface UserCardProps {
  href: string;
  status?: string;
  online: boolean;
}

export const UserCard = ({ href, online, status }: UserCardProps) => {
  return (
    <Link href={href} className="flex gap-2.5 rounded-lg px-5 py-2.5 hover:bg-primary/40">
      <div className="relative h-9 w-9">
        <Image fill src="/image/avatar.jpg" alt="Аватар" className="rounded-full object-cover" />
      </div>
      <div className="flex-1 overflow-hidden pr-2">
        <span className="text-4 block truncate font-medium leading-4">pauchok</span>
        {online && <span className="block truncate text-xs font-medium mt-1">В сети</span>}
      </div>
      {status && <span className="block text-sm">{status}</span>}
    </Link>
  );
};