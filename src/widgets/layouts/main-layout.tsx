"use client";

import { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";

import { appStore } from "@/app/store";

import { Header } from "@/widgets/header";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={appStore}>
      <div className="container">
        <Header />
        {children}
      </div>
    </Provider>
  );
};
