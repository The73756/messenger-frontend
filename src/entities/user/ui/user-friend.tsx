import Image from "next/image";
import Link from "next/link";

export const UserFriend = () => {
  return (
    <div className="flex gap-4 border-b-[1px] border-gray-500 py-3">
      <Link href="/" className="avatar h-20 w-20">
        <Image fill src="/image/avatar.jpg" alt="Аватар пользователя" className="rounded-full" />
      </Link>
      <div>
        <Link href="/" className="mb-2 block text-base font-medium text-main hover:underline">
          Николай Тарасов
        </Link>
        <Link href="/" className="mb-2 block text-sm hover:underline">
          Скопин
        </Link>
        <Link href="/" className="mb-2 block text-sm text-main hover:underline">
          Написать сообщение
        </Link>
      </div>
    </div>
  );
};