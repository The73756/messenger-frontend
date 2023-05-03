import { SpriteKey } from "@/shared/api";
import { routes } from "@/shared/constants/routes";

interface IMenuItem {
  iconName: SpriteKey;
  path: string;
  value: string;
}

export const menuList: IMenuItem[] = [
  {
    iconName: "settings/account",
    path: routes.ACCOUNT,
    value: "Мой аккаунт",
  },
  {
    iconName: "settings/group",
    path: routes.NEW_GROUP,
    value: "Новая группа",
  },
  {
    iconName: "settings/friends",
    path: routes.FRIENDS,
    value: "Друзья",
  },
  {
    iconName: "settings/message",
    path: routes.MESSAGES,
    value: "Сообщения",
  },
  {
    iconName: "settings/tools",
    path: routes.TOOLS,
    value: "Настройки",
  },
  {
    iconName: "settings/exit",
    path: routes.EXIT,
    value: "Выход",
  },
];
