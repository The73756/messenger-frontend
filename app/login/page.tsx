import { NextPage } from "next";

import { LoginPage } from "@/src-pages/login-page";

export const metadata = {
  title: "Messenger - Вход",
  description: "Войти в Messenger",
};

const Login: NextPage = () => {
  return <LoginPage />;
};

export default Login;
