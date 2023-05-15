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
        <span className="label-text text-[#fff] font-medium text-xs">{label}</span>
      </label>
      <input
        {...register}
        {...props}
        id={id}
        placeholder={placeholder}
        className={`input-bordered mb-2 border-[#4D658C] input min-w-full text-[#fff] placeholder-white placeholder: font-normal placeholder: text-xs ${className} ${error && "input-error"}`}
      />
      {error && (
        <div className="label-text mt-1 w-full text-error">
          {error.message || "Это обязательное поле!"}
        </div>
      )}
    </div>
  );
};
