import Image from "next/image";
import Link from "next/link";

import { routes } from "@/shared/constants";
import { ButtonRect, Icon } from "@/shared/ui";

export const HeaderProfile = () => {
  return (
    <div className="rounded-[15px] bg-neutral px-[20px] py-[15px]">
      <ButtonRect className="mr-5">
        <Icon name="settings/bell" className="w-[25px] h-[25px]" />
      </ButtonRect>
      <Link href={`${routes.ACCOUNT}`} className="relative h-10 w-10">
        <Image fill src="/image/avatar.jpg" alt="Аватар" className="rounded-full" />
      </Link>
    </div>
  )
}
