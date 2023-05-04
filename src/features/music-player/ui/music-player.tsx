import { Icon } from "@/shared/ui";

export const MusicPlayer = () => {
  return (
    <div className="hidden cursor-pointer items-center rounded px-5 py-3 transition-colors hover:bg-slate-800 lg:flex">
      <button className="opacity-70 hover:opacity-100">
        <Icon name="player/prev" className="h-6 w-6" />
      </button>
      <button className="opacity-70 hover:opacity-100">
        <Icon name="player/play" className="h-6 w-6" />
      </button>
      <button className="opacity-70 hover:opacity-100">
        <Icon name="player/next" className="h-6 w-6" />
      </button>
      <p className="ml-3 text-base font-medium">pistenkov — она ему сосала..</p>
    </div>
  );
};
