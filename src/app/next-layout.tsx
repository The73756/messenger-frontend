"use client";

import { PropsWithChildren } from "react";
import "./styles/globals.css";
import { Provider } from "react-redux";

import { appStore } from "./store";

export const NextLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="ru" data-theme="night">
      <Provider store={appStore}>
        <body>{children}</body>
      </Provider>
    </html>
  );
};
