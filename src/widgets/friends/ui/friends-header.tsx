"use client";

import { Button, Icon } from "@/shared/ui";

export const FriendsHeader = () => {
  return (
    <div>
      <div className="mb-2 flex gap-2">
        <Button>Все друзья 33</Button>
        <Button>Друзья онлайн</Button>
        <Button className="ml-auto bg-main hover:bg-main-focus">Найти друзей</Button>
      </div>
      <div className="flex w-full items-center rounded border-[1px] border-solid border-slate-500">
        <input
          type="text"
          placeholder="Поиск друзей"
          className="flex-1 bg-transparent pl-2 text-base outline-none"
        />
        <button className="flex h-8 w-14 items-center justify-center rounded bg-neutral transition-colors hover:bg-neutral-focus">
          <Icon name="settings/search" className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
