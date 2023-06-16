"use client";

import { UserCard } from "@/entities/user";

export const WidgetInfoUsers = () => {
  return (
    <div className="px-2.5 py-4">
      <UserCard href="/" status="Владелец" online={true} />
      <UserCard href="/" online={true} />
      <UserCard href="/" online={true} />
      <UserCard href="/" online={false} />
      <UserCard href="/" online={false} />
      <UserCard href="/" online={false} />
      <UserCard href="/" online={true} />
      <UserCard href="/" online={false} />
      <UserCard href="/" online={true} />
      <UserCard href="/" online={false} />
      <UserCard href="/" online={false} />
      <UserCard href="/" online={false} />
      <UserCard href="/" online={false} />
    </div>
  );
};
