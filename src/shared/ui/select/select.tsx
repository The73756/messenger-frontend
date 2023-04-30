import { FC, useState } from "react";

import { Icon } from "@/shared/ui";

interface SelectProps {
  value: string | number;
  changeValue: (val: any) => void;
  arrayValues: string[] | number[];
}

export const Select: FC<SelectProps> = ({ value, changeValue, arrayValues }) => {
  const [isShow, setIsShow] = useState(false);

  const handlerClick = (value: string | number) => {
    changeValue(value);
    setIsShow(false);
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsShow(!isShow)}
        className="flex w-full items-center justify-between gap-2 whitespace-nowrap rounded border-[1px] border-solid border-slate-500 p-1 text-sm">
        {value}
        <Icon
          name="figures/arrow"
          className={"h-2 w-2" + (isShow ? " rotate-180" : " translate-y-0.5")}
        />
      </button>
      {isShow && (
        <div className="custom-scrollbar absolute left-0 right-0 max-h-36 translate-y-[-4px] overflow-y-auto rounded-sm border-[1px] border-solid border-slate-500 bg-slate-700">
          <ul>
            {arrayValues.map((city) => (
              <li
                key={city}
                onClick={() => handlerClick(city)}
                className="cursor-pointer p-1 text-sm hover:bg-slate-800">
                {city}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
