"use client";

import Link from "next/link";

export const FriendsNav = () => {
  return (
    <div className="border-1 h-fit max-h-[92vh] w-full max-w-xs rounded border border-gray-500 p-1">
      <ul>
        <li>
          <Link href="/" className="block w-full rounded p-2 text-sm hover:bg-item-focus">
            Мои друзья
          </Link>
        </li>
        <li>
          <Link href="/" className="block w-full rounded p-2 text-sm hover:bg-item-focus">
            Заявки в друзья
          </Link>
        </li>
        <li>
          <Link href="/" className="block w-full rounded p-2 text-sm hover:bg-item-focus">
            Поиск друзей
          </Link>
        </li>
      </ul>
    </div>
  );
};
