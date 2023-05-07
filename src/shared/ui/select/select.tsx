"use client";

import { FC, useState, MouseEvent } from "react";

import { Icon } from "@/shared/ui";

import SelectItem from "./select-item";

interface SelectProps {
  value: string | number;
  changeValue: (val: any) => void;
  items: string[] | number[];
}

export const Select: FC<SelectProps> = ({ value, changeValue = null, items }) => {
  const [isShow, setIsShow] = useState(false);

  const handlerClick = (value: string | number) => {
    if (changeValue) {
      changeValue(value);
      setIsShow(false);
    }
  };

  const handlerClose = (): void => {
    setIsShow(false);
    return document.removeEventListener("click", handlerClose);
  };

  const openSelect = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsShow(!isShow);
  };

  return (
    <div className="relative">
      <button
        onClick={openSelect}
        className="border-slate-500 flex w-full items-center justify-between gap-2 whitespace-nowrap rounded border-[1px] border-solid p-1 text-sm">
        {value}
        {/* <Icon
          name="figures/arrow"
          className={"h-2 w-2" + (isShow ? " rotate-180" : " translate-y-0.5")}
        /> */}
      </button>
      {isShow && (
        <SelectItem
          isOpen={isShow}
          items={items}
          handlerClick={handlerClick}
          handlerClose={handlerClose}
        />
      )}
    </div>
  );
};
