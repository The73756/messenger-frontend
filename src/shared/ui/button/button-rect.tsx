import { ReactNode } from "react";

interface ButtonRectProps {
  children: ReactNode;
  className?: string;
}

export const ButtonRect = ({ children, className }: ButtonRectProps) => {
  return (
    <button
      className={
        "btn flex h-[45px] w-[45px] items-center justify-center gap-[15px] rounded-[10px] border-none p-0 hover:bg-primary-rgba hover:text-primary " +
        className
      }>
      {children}
    </button>
  );
};