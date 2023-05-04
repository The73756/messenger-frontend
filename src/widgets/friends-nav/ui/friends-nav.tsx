"use client";

import Link from "next/link";

import { userSlice } from "@/entities/user";

import { useAppDispatch, useAppSelector } from "@/shared/model";
import { Button } from "@/shared/ui/button";

export const FriendsNav = () => {
  const { increment } = userSlice.actions;
  const { num } = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  
  return (
    <div className="max-w-xs max-h-[92vh] h-fit w-full p-1 rounded border border-1 border-gray-500">
      <Button onClick={() => dispatch(increment(2))}>increment</Button>
      {num}
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
