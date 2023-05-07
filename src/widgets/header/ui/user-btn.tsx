import { MenuList } from "@/features/menu-list";

import { UserCard } from "@/entities/user-card";

export const UserBtn = () => {
  return (
    <div className="dropdown-end dropdown sm:ml-2 lg:ml-auto">
      <label tabIndex={0} className="btn-ghost btn hover:bg-item-focus">
        <UserCard />
      </label>
      <div tabIndex={0} className="dropdown-content w-52 bg-info-content p-2 shadow bg-neutral">
        <MenuList />
      </div>
    </div>
  );
};
