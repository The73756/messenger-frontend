import { FC, MouseEvent, useEffect } from "react";

interface SelectItemProps {
  isOpen: boolean;
  items: string[] | number[];
  handlerClick: (val: string | number) => void;
  handlerClose: () => void;
}

const SelectItem: FC<SelectItemProps> = ({ items, handlerClick, handlerClose }) => {
  useEffect(() => {
    document.addEventListener("click", handlerClose);
  }, []);

  return (
    <div
      onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      className="custom-scrollbar border-slate-500 bg-slate-700 absolute left-0 right-0 z-50 max-h-36 translate-y-[-4px] overflow-y-auto rounded-sm border-[1px] border-solid">
      <ul>
        {items.map((item) => (
          <li
            key={item}
            onClick={() => handlerClick(item)}
            className="hover:bg-slate-800 cursor-pointer p-1 text-sm">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectItem;
