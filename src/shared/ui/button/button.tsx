import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({
  className = "",
  type = "button",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`btn h-auto min-h-0 w-full bg-[#4D658C] py-1 text-sm normal-case ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
