"use client";

import Link from "next/link";

import { userSlice } from "@/entities/user";

import { useAppDispatch, useAppSelector } from "@/shared/model";
import { Button } from "@/shared/ui/button";

export const FriendsNav = () => {
  const { increment } = userSlice.actions;
  const { num } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  return (
    <div className="border-1 border-gray-500 h-fit max-h-[92vh] w-full max-w-xs rounded border p-1">
      <Button onClick={() => dispatch(increment(1))}>increment</Button>
      {num}
      <ul>
        <li>
          <Link href="/" className="bg-gray-700 block w-full rounded p-2 text-sm">
            Мои друзья
          </Link>
        </li>
        <li>
          <Link href="/" className="text-sm">
            Заявки в друзья
          </Link>
        </li>
        <li>
          <Link href="/" className="text-sm">
            Поиск друзей
          </Link>
        </li>
      </ul>
    </div>
  );
};
