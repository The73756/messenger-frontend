"use client";

import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import "./styles/globals.css";

import { appStore } from "./store";

export const NextLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="ru" data-theme="mytheme">
      <Provider store={appStore}>
        <body>{children}</body>
      </Provider>
    </html>
  );
};
