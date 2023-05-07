"use client";

import { Resizable, ResizableProps } from "re-resizable";

interface ResizerProps extends ResizableProps {
  enable: Required<ResizableProps>["enable"];
}

export const Resizer = ({
  children,
  className,
  defaultSize,
  minWidth,
  maxWidth,
  ...props
}: ResizerProps) => {
  return (
    <Resizable
      {...props}
      defaultSize={defaultSize || { width: 350, height: "100%" }}
      minWidth={minWidth || 200}
      maxWidth={maxWidth || 600}
      handleStyles={{
        right: {
          right: -8,
          width: 8,
        },
        left: {
          left: -10,
          width: 8,
        },
      }}
      handleClasses={{
        right: "resizeHandler",
        left: "resizeHandler",
      }}>
      {children}
      <div className=""></div>
    </Resizable>
  );
};
