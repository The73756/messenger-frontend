import { ReactNode } from "react";

interface ChatNavBtnProps {
  children: ReactNode;
}

export const ChatNavBtn = ({ children }: ChatNavBtnProps) => {
  return (
    <button className="rounded-[10px 10px 0px 0px] btn relative whitespace-nowrap border-none px-2.5 pb-[16px] pt-[11px] text-sm font-medium leading-[17px] before:absolute before:bottom-[-2px] before:left-0 before:right-0 before:z-10 before:h-[3px] before:rounded-[10px] hover:bg-white/10">
      {children}
    </button>
  );
};
