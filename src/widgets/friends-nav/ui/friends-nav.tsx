"use client";

import Link from "next/link";

import { userSlice } from "@/entities/user";

import { useAppDispatch, useAppSelector } from "@/shared/model";
import { Button } from "@/shared/ui/button";

export const FriendsNav = () => {
  return (
    <div className="border-1 border-gray-500 h-fit max-h-[92vh] w-full max-w-xs rounded border p-1">
      <ul>
        <li>
          <Link href="/" className="block w-full rounded p-2 text-sm hover:bg-gray-700">
            Мои друзья
          </Link>
        </li>
        <li>
          <Link href="/" className="block w-full rounded p-2 text-sm hover:bg-gray-700">
            Заявки в друзья
          </Link>
        </li>
        <li>
          <Link href="/" className="block w-full rounded p-2 text-sm hover:bg-gray-700">
            Поиск друзей
          </Link>
        </li>
      </ul>
    </div>
  );
};
