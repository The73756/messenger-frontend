import { Icon } from "@/shared/ui"

export const MusicNav = () => {
  return (
    <div className="flex items-center gap-[15px] mr-[60px]">
      <button className="text-white hover:text-primary">
        <Icon name="player/prev" className="w-6 h-6" />
      </button>
      <button className="rounded-full flex items-center justify-center bg-white w-9 h-9">
        <Icon name="player/pause" className="w-[15px] h-[17px] text-primary" />
      </button>
      <button className="text-white hover:text-primary">
        <Icon name="player/next" className="w-6 h-6" />
      </button>
    </div>
  )
}
