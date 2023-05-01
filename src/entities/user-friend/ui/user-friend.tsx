import Image from "next/image";
import Link from "next/link";

export const UserFriend = () => {
  return (
    <div className="flex gap-4 py-3 border-b-[1px] border-gray-500">
      <Link href="/" className="avatar w-20 h-20">
        <Image fill src="/image/avatar.jpg" alt="Аватар пользователя" className="rounded-full" />
      </Link>
      <div>
        <Link href="/" className="block text-base hover:underline mb-2 font-medium text-main">Николай Тарасов</Link>
        <Link href="/" className="block mb-2 text-sm hover:underline">Скопин</Link>
        <Link href="/" className="block text-sm hover:underline mb-2 text-main">Написать сообщение</Link>
      </div>
    </div>
  );
};
