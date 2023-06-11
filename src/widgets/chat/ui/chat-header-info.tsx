import Image from "next/image";

export const ChatHeaderInfo = () => {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative h-8 w-8">
        <Image fill src="/image/avatar.jpg" alt="Аватар" className="rounded-full" />
      </div>
      <div>
        <span className="block text-xs">Hte62623</span>
        <span className="text-xs">что то там 10 минут аго</span>
      </div>
    </div>
  );
};
