import { FC, PropsWithChildren, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export const Portal: FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);
  console.log("hello");

  useEffect(() => {
    ref.current = document.body;

    setMounted(true);
  }, []);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
};
