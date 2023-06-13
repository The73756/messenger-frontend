import { Icon } from "@/shared/ui";

export const HeaderNav = () => {
  return (
    <div className="flex w-[320px] justify-between rounded-xl bg-neutral px-4 py-4">
      <button className="btn-rect btn">
        <Icon name="settings/search" className="header-nav-btn" />
      </button>
      <button className="btn-rect btn">
        <Icon name="settings/moon" className="header-nav-btn" />
      </button>
      <button className="btn-rect btn">
        <Icon name="settings/tools" className="header-nav-btn" />
      </button>
      <button className="btn-rect btn">
        <Icon name="settings/friends" className="header-nav-btn" />
      </button>
      <button className="btn-rect btn">
        <Icon name="settings/notes" className="header-nav-btn" />
      </button>
    </div>
  );
};
