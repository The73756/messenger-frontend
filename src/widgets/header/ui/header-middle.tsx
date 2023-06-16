import { MusicPlayer } from "@/features/music-player"

export const HeaderMiddle = () => {
  return (
    <div className="flex-1 bg-neutral px-[25px] py-[16px] rounded-xl">
      <MusicPlayer />
    </div>
  )
}
