import { NextPage } from "next";

import { RegistrationPage } from "@/src-pages/registration-page";

export const metadata = {
  title: "Messenger - Регистрация",
  description: "Зарегистрироваться в Messenger",
};

const Auth: NextPage = () => {
  return <RegistrationPage />;
};

export default Auth;
