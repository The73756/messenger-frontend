import { useEffect } from "react";

interface SelectItemProps<T> {
  isOpen: boolean;
  items: T[];
  handlerClick: (val: T) => void;
  handlerClose: () => void;
}

const SelectItem = <T extends string | number>({
  items,
  handlerClick,
  handlerClose,
}: SelectItemProps<T>) => {
  useEffect(() => {
    document.addEventListener("click", handlerClose);
  }, []);

  return (
    <div className="custom-scrollbar absolute left-0 right-0 z-50 max-h-36 translate-y-[-4px] overflow-y-auto rounded-sm border-[1px] border-solid border-slate-500 bg-neutral">
      <ul>
        {items.map((item) => (
          <li
            key={item}
            onClick={() => handlerClick(item)}
            className="cursor-pointer p-1 text-sm hover:bg-neutral-focus">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectItem;
