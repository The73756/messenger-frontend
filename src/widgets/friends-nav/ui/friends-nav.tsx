import Link from "next/link";

export const FriendsNav = () => {
  return (
    <div className="max-w-xs max-h-[92vh] h-fit w-full p-1 rounded border border-1 border-gray-500">
      <ul>
        <li>
          <Link href="/" className="block text-sm p-2 rounded bg-gray-700 w-full">Мои друзья</Link>
        </li>
        <li>
          <Link href="/" className="text-sm">Заявки в друзья</Link>
        </li>
        <li>
          <Link href="/" className="text-sm">Поиск друзей</Link>
        </li>
      </ul>
    </div>
  );
};
