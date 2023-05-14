import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  className = "",
  type = "button",
  children,
  ...props
}) => {
  return (
    <button
      type={type}
      className={`btn h-auto min-h-0 py-1 text-sm normal-case w-full bg-[#4D658C] ${className}`}
      {...props}>
      {children}
    </button>
  );
};
