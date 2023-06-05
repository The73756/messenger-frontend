"use client"

import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import TextareaAutosize, { TextareaAutosizeProps } from "react-textarea-autosize";

interface TextareaProps extends TextareaAutosizeProps {
  label: string;
  labelClassName?: string;
  error?: FieldError;
  register?: UseFormRegisterReturn<string>;
  wrapperClassName?: string;
  id: string;
}

export const Textarea = ({
  wrapperClassName,
  id,
  label,
  labelClassName,
  className,
  error,
  register,
  ...props
}: TextareaProps) => {
  return (
    <div className={wrapperClassName}>
      <label className="label" htmlFor={id}>
        <span className={`label-text ${labelClassName}`}>{label}</span>
      </label>
      <TextareaAutosize
        {...register}
        {...props}
        id={id}
        className={`custom-scrollbar textarea-bordered textarea w-full resize-none ${className} ${
          error && "textarea-error"
        }`}
      />
      {error && (
        <div className="label-text mt-1 w-full text-error">
          {error.message || "Это обязательное поле!"}
        </div>
      )}
    </div>
  );
};
