import { PropsWithChildren } from "react";

import { NextLayout } from "@/app";

export const metadata = {
  title: "Messenger",
  description: "Simple messenger app",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return <NextLayout>{children}</NextLayout>;
};

export default RootLayout;
