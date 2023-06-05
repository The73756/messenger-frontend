"use client";

import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import "./styles/globals.css";

import { appStore } from "./store";

export const NextLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="ru" data-theme="mytheme">
      <Provider store={appStore}>
        <body>
          {children}
          <Toaster position="bottom-right" />
        </body>
      </Provider>
    </html>
  );
};
