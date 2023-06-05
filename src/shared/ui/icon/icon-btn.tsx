import { ButtonHTMLAttributes } from "react";

import { Icon, IconProps } from "./icon";

export interface IconBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: IconProps["name"];
  iconClassName?: string;
}

export const IconBtn = ({
  className = "",
  iconClassName = "",
  name,
  type = "button",
  ...props
}: IconBtnProps) => {
  return (
    <button
      type={type}
      className={`no-animation btn flex h-12 w-12 items-center justify-center rounded-full bg-[#4D658C] p-0 ${className}`}
      {...props}
    >
      <Icon name={name} className={`h-5 w-5 ${iconClassName}`} />
    </button>
  );
};
