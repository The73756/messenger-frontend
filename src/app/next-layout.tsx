"use client";

import { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";
import "./styles/globals.css";

import { appStore } from "./store";

export const NextLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ru" data-theme="mytheme">
      <Provider store={appStore}>
        <body>{children}</body>
      </Provider>
    </html>
  );
};
