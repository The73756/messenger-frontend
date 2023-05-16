import { SVGProps } from "react";

import { SpriteKey } from "@/shared/api";

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name" | "type"> {
  name: SpriteKey;
}

export const Icon = ({ name, className, viewBox, ...props }: IconProps) => {
  const [spriteName, iconName] = name.split("/");

  return (
    <svg
      className={`inline-block select-none fill-current stroke-current text-inherit ${className}`}
      viewBox={viewBox}
      focusable="false"
      aria-hidden
      {...props}>
      <use xlinkHref={`/sprite/${spriteName}.svg#${iconName}`} />
    </svg>
  );
};
