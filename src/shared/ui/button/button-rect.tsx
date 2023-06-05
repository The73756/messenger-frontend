import { ReactNode } from "react";

interface ButtonRectProps {
  children: ReactNode;
}

export const ButtonRect = ({ children }: ButtonRectProps) => {
  return (
    <button className="btn flex h-[45px] w-[45px] items-center justify-center gap-[15px] rounded-[10px] border-none p-0 text-white hover:bg-primary-rgba hover:text-primary">
      {children}
    </button>
  );
};
