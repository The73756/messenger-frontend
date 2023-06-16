import { Icon } from "@/shared/ui";

export const WidgetInfoNavFiles = () => {
  return (
    <div className="flex justify-between p-2 gap-4 overflow-x-auto scroll">
      <button className="btn block h-fit p-1 normal-case text-inherit">
        <div className="mx-auto mb-1 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
          <Icon name="settings/profile" className="h-6 w-6" />
        </div>
        <span className="block text-sm">Участники</span>
      </button>
      <button className="btn block h-fit p-1 normal-case text-inherit">
        <div className="mx-auto mb-1 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
          <Icon name="settings/media" className="h-6 w-6" />
        </div>
        <span className="block text-sm">Медиа</span>
      </button>
      <button className="btn block h-fit p-1 normal-case text-inherit">
        <div className="mx-auto mb-1 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
          <Icon name="settings/files" className="h-6 w-6" />
        </div>
        <span className="block text-sm">Файлы</span>
      </button>
      <button className="btn block h-fit p-1 normal-case text-inherit">
        <div className="mx-auto mb-1 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
          <Icon name="settings/link" className="h-6 w-6" />
        </div>
        <span className="block text-sm">Ссылки</span>
      </button>
      <button className="btn block h-fit p-1 normal-case text-inherit">
        <div className="mx-auto mb-1 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
          <Icon name="settings/audio" className="h-6 w-6" />
        </div>
        <span className="block text-sm">Голосовые</span>
      </button>
    </div>
  );
};
