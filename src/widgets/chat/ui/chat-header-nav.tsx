import { Icon } from "@/shared/ui";

export const ChatHeaderNav = () => {
  return (
    <div className="flex gap-2.5">
      <button className="btn-circle btn h-9 w-9">
        <Icon name="settings/search" className="h-5 w-5" />
      </button>
      <button className="btn-circle btn h-9 w-9">
        <Icon name="settings/tel" className="h-5 w-5" />
      </button>
      <div className="dropdown">
        <button tabIndex={0} className="btn-circle btn h-9 w-9">
          <Icon name="settings/points" className="h-5 w-5" />
        </button>
        <ul tabIndex={0} className="dropdown-content mt-5">
          <li>
            <Icon name="settings/bell-none" className="h-4 w-4" />
            Выключить уведомления
          </li>
          <li>
            <Icon name="settings/video" className="h-4 w-4" />
            Видеозвонок
          </li>
          <li>
            <Icon name="settings/repost" className="h-4 w-4" />
            Поделиться контактом
          </li>
          <li>
            <Icon name="settings/gift" className="h-4 w-4" />
            Gift Premium
          </li>
          <li>
            <Icon name="settings/castle" className="h-4 w-4" />
            Заблокировать
          </li>
          <li>
            <Icon name="settings/delete" className="h-4 w-4" />
            Удалить чат
          </li>
        </ul>
      </div>
    </div>
  );
};
