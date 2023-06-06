import Image from "next/image";

import { Icon } from "@/shared/ui";

import { MusicInfo } from "./music-info";
import { MusicNav } from "./music-nav";
import { MusicProgress } from "./music-progress";
import { MusicVolume } from "./music-volume";

export const MusicPlayer = () => {
  return (
    <div className="flex w-full">
      <MusicInfo />
      <MusicNav />
      <MusicProgress />
      <MusicVolume />
      {/* <button className="opacity-70 hover:opacity-100">
        <Icon name="player/prev" className="h-6 w-6" />
      </button>
      <button className="opacity-70 hover:opacity-100">
        <Icon name="player/play" className="h-6 w-6" />
      </button>
      <button className="opacity-70 hover:opacity-100">
        <Icon name="player/next" className="h-6 w-6" />
      </button>
      <p className="ml-3 text-base font-medium">pistenkov — она ему сосала..</p> */}
    </div>
  );
};
