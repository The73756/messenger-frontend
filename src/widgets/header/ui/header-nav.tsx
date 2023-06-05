import { Icon, ButtonRect } from "@/shared/ui";

export const HeaderNav = () => {
  return (
    <div className="flex justify-between w-[320px] rounded-[15px] bg-neutral px-4 py-[15px]">
      <ButtonRect>
        <Icon name="settings/search" className="block h-[30px] w-[30px]" />
      </ButtonRect>
      <ButtonRect>
        <Icon name="settings/moon" className="block h-[30px] w-[30px]" />
      </ButtonRect>
      <ButtonRect>
        <Icon name="settings/tools" className="block h-[30px] w-[30px]" />
      </ButtonRect>
      <ButtonRect>
        <Icon name="settings/friends" className="block h-[30px] w-[30px]" />
      </ButtonRect>
      <ButtonRect>
        <Icon name="settings/notes" className="block h-[30px] w-[30px]" />
      </ButtonRect>
    </div>
  );
};
