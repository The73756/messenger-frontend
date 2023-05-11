import { Icon } from "@/shared/ui";

export const Notification = () => {
  return (
    <button className="btn-ghost btn-circle btn mx-2 hover:bg-item-focus">
      <div className="indicator">
        <Icon name="notification/bell" className="h-5 w-5" />
        <span className="badge-primary badge badge-xs indicator-item h-4 w-4">3</span>
      </div>
    </button>
  );
};
