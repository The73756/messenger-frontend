import Image from "next/image";

export const UserCard = () => {
  return (
    <div className="flex flex-col-reverse items-center gap-3 lg:flex-row">
      <span className="font-medium normal-case">Pauchok</span>
      <div className="avatar h-24 w-24 lg:h-12 lg:w-12">
        <Image fill src="/image/avatar.jpg" alt="Аватар" className="rounded-full" />
      </div>
    </div>
  );
};