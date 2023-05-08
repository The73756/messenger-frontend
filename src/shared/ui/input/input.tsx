import { AllHTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface InputProps extends AllHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
  register: UseFormRegisterReturn<string>;
  wrapperClassName?: string;
}

export const Input = ({
  wrapperClassName,
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
      <label className="label" htmlFor={id}>
        <span className="label-text">{label}</span>
      </label>
      <input
        {...register}
        {...props}
        id={id}
        placeholder={placeholder}
        className={`input-bordered input w-full ${className} ${error && "input-error"}`}
      />
      {error && (
        <div className="label-text mt-1 w-full text-error">
          {error.message || "Это обязательное поле!"}
        </div>
      )}
    </div>
  );
};
