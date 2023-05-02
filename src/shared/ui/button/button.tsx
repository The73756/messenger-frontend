import { FC, ReactNode } from "react";

interface ButtonProps {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ className, children, onClick }) => {
  return (
    <button
      onClick={onClick && onClick}
      className={
        "btn h-auto min-h-0 py-1 text-sm normal-case" + (className ? ` ${className}` : "")
      }>
      {children}
    </button>
  );
};
