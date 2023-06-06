import { Icon } from "@/shared/ui";

import { LineProgress } from "./line-progress";

export const MusicVolume = () => {
  return (
    <div className="ml-auto w-[110px] flex items-center gap-2.5">
      <button className="text-white hover:text-primary">
        <Icon name="player/volume" className="h-5 w-5" />
      </button>
      <LineProgress volume={50} className="w-[80px]" />
    </div>
  );
};
