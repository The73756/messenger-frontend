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
      className={`btn h-auto min-h-0 py-1 text-sm normal-case ${className}`}
      {...props}>
      {children}
    </button>
  );
};
