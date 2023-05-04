import { FC } from "react";

type AFC<P = {}> = (...args: Parameters<FC<P>>) => Promise<ReturnType<FC<P>>>;

export const asSyncComponent = <T extends AFC<any>>(
  component: T,
): FC<T extends AFC<infer P> ? P : never> => {
  return component as any;
};
