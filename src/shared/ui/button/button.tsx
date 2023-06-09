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
      className={`btn h-auto min-h-0 flex-1 bg-primary py-1 text-sm normal-case ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
