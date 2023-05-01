import { FC } from "react";

interface RadioProps {
  value: string;
  name: string;
  id: string;
  checked?: boolean;
}

export const Radio: FC<RadioProps> = ({ value, name, id, checked }) => {
  return (
    <div className="flex items-center gap-2">
      <label
        className="relative flex cursor-pointer items-center rounded-full h-3 w-3"
        htmlFor={id}
        data-ripple-dark="true"
      >
        <input
          id={id}
          name={name}
          type="radio"
          className="peer relative h-full w-full cursor-pointer appearance-none rounded-full border border-white checked:border-primary checked:bg-primary"
          checked={checked}
          onChange={() => {}}
        />
      </label>
      <label
        className="mt-px cursor-pointer select-none text-sm"
        htmlFor={id}
      >
        {value}
      </label>
    </div>
  );
};
