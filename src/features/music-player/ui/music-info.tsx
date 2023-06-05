import Image from "next/image";

export const MusicInfo = () => {
  return (
    <div className="flex gap-2.5 mr-11">
      <div className="relative h-10 w-10">
        <Image fill src="/image/avatar.jpg" alt="Аватар" className="rounded-full" />
      </div>
      <div>
        <h5 className="text-lg font-medium leading-[18px] text-white">hate if ur mad</h5>
        <span className="text-sm font-medium leading-4 text-white opacity-50">Yameli Online</span>
      </div>
    </div>
  );
};
