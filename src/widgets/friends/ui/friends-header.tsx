"use client";

import { ParametersSearch } from "@/features/parameters-search";

import { Icon } from "@/shared/ui";

export const FriendsHeader = () => {
  return (
    <div>
      <div className="mb-2 flex gap-2">
        <button className="btn">Все друзья 33</button>
        <button className="btn">Друзья онлайн</button>
        <button className="btn-primary btn ml-auto">Найти друзей</button>
      </div>
      <div className="flex items-center w-full rounded border-[1px] border-solid border-slate-500">
        <input
          type="text"
          placeholder="Поиск друзей"
          className="flex-1 text-base outline-none pl-2 bg-transparent"
        />
        <div className="dropdown-end dropdown">
          <button tabIndex={0} className="flex items-center gap-1 h-8 px-2 hover:underline">
            Параметры
            <Icon name="figures/arrow" className="w-2 h-2 translate-y-0.5" />
          </button>
          <ParametersSearch />
        </div>
        <button className="transition-colors flex h-8 w-14 rounded items-center justify-center bg-gray-700 hover:bg-gray-600">
          <Icon name="settings/search" className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
