import Image from "next/image";
import Link from "next/link";

import { routes } from "@/shared/constants";
import { Icon } from "@/shared/ui";

export const HeaderProfile = () => {
  return (
    <div className="rounded-xl bg-neutral px-[20px] py-[15px]">
      <button className="btn btn-rect mr-5">
        <Icon name="settings/bell" className="w-[25px] h-[25px]" />
      </button>
      <Link href={`${routes.ACCOUNT}`} className="relative h-10 w-10">
        <Image fill src="/image/avatar.jpg" alt="Аватар" className="rounded-full" />
      </Link>
    </div>
  )
}
