import { LineProgress } from "./line-progress";

export const MusicProgress = () => {
  return (
    <div className="flex items-center gap-2.5">
      <span className="text-xs">01:50</span>
      <LineProgress volume={40} className="w-[410px]" />
      <span className="text-xs">01:50</span>
    </div>
  );
};
