import { PropsWithChildren } from "react";

import { Header } from "@/widgets/header";

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="container">
      <Header />
      {children}
    </div>
  );
};
