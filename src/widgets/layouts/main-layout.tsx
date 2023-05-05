import { FC, PropsWithChildren } from "react";

import { Header } from "@/widgets/header";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="container">
      <Header />
      {children}
    </div>
  );
};
