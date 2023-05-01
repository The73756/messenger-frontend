import { FC, MouseEvent, useEffect } from "react";

interface SelectItemProps {
  isOpen: boolean;
  items: string[] | number[];
  handlerClick: (val: string | number) => void;
  handlerClose: () => void;
}

const SelectItem: FC<SelectItemProps> = ({ isOpen, items, handlerClick, handlerClose }) => {

  useEffect(() => {
    document.addEventListener("click", handlerClose);
  }, []);

  return (
    <div onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()} className="custom-scrollbar z-50 absolute left-0 right-0 max-h-36 translate-y-[-4px] overflow-y-auto rounded-sm border-[1px] border-solid border-slate-500 bg-slate-700">
      <ul>
        {items.map((item) => (
          <li
            key={item}
            onClick={() => handlerClick(item)}
            className="cursor-pointer p-1 text-sm hover:bg-slate-800">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectItem;
