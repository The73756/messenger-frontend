import Link from "next/link";

import { menuList } from "@/shared/constants";
import { Icon } from "@/shared/ui";

export const MenuList = () => {
  return (
    <ul className="space-y-1 pb-4 pt-2 text-sm">
      {menuList.map((item) => (
        <li key={item.path} className="rounded-sm">
          <Link
            href={item.path}
            className="flex items-center space-x-3 rounded-md p-2 transition-colors hover:bg-item-focus">
            <Icon name={item.iconName} className="h-6 w-6" />
            <span>{item.value}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
