import { FC } from "react";

/*
 * This HOC created for resolve "'SomeComponent' cannot be used as a JSX component" error
 * Issue - https://github.com/vercel/next.js/issues/42292
 * Reference - https://github.com/vercel/next.js/issues/42292#issuecomment-1491127192
 * */

type AFC<P = {}> = (...args: Parameters<FC<P>>) => Promise<ReturnType<FC<P>>>;

export const asSyncComponent = <T extends AFC<any>>(
  component: T,
): FC<T extends AFC<infer P> ? P : never> => {
  return component as any;
};
