import { AllHTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface InputProps extends AllHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
  register: UseFormRegisterReturn<string>;
  wrapperClassName?: string;
  labelClassName?: string;
  id: string;
}

export const Input = ({
  wrapperClassName,
  labelClassName,
  className,
  id,
  placeholder,
  label,
  error,
  register,
  ...props
}: InputProps) => {
  return (
    <div className={wrapperClassName}>
      <label className={`label ${labelClassName}`} htmlFor={id}>
        <span className="label-text text-xs font-medium text-[#fff]">
          {label}
        </span>
      </label>
      <input
        {...register}
        {...props}
        id={id}
        placeholder={placeholder}
        className={`input-bordered input placeholder: placeholder: mb-2 min-w-full border-[#4D658C] text-xs font-normal text-[#fff] placeholder-white ${className} ${
          error && "input-error"
        }`}
      />
      {error && (
        <div className="label-text text-error mt-1 w-full">
          {error.message || "Это обязательное поле!"}
        </div>
      )}
    </div>
  );
};
