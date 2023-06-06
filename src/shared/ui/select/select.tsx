"use client";

import { MouseEvent, useState } from "react";

import { Icon } from "@/shared/ui";

import SelectItem from "./select-item";

interface SelectProps<T> {
  value: T;
  changeValue: (val: T) => void;
  items: T[];
}

export const Select = <T extends string | number>({
  value,
  changeValue,
  items,
}: SelectProps<T>) => {
  const [isShow, setIsShow] = useState(false);

  const handlerClick = (value: T) => {
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
    setIsShow((prev) => !prev);
  };

  return (
    <div className="relative">
      <button
        onClick={openSelect}
        className="flex w-full items-center justify-between gap-2 whitespace-nowrap rounded border-[1px] border-solid border-slate-500 p-1 text-sm">
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
