"use client";

import { useRouter } from "next/navigation";
import { PropsWithChildren, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import { Header } from "@/widgets/header";

import { checkAuth } from "@/entities/user";

import { UserResponse } from "@/shared/api";
import { routes } from "@/shared/constants";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { Loader } from "@/shared/ui";

export const MainLayout = ({ children }: PropsWithChildren) => {
  const { isAuth, user } = useAppSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const checkIsUserProfileCompleted = (userData: UserResponse | null) => {
    if (userData && (!userData?.nickname || !userData?.firstName)) {
      router.push(routes.ACCOUNT);
      toast.error("Заполните профиль!");
    }
  };

  useEffect(() => {
    if (!isAuth) {
      dispatch(checkAuth())
        .unwrap()
        .then((data) => {
          checkIsUserProfileCompleted(data);
          setIsLoading(false);
        })
        .catch(() => {
          router.push(routes.LOGIN);
          toast.error("Вы не авторизованы, повторите вход!");
        });
    } else {
      checkIsUserProfileCompleted(user);
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-[100vh] w-full items-center justify-center">
        <Loader className="h-16 w-16" />
      </div>
    );
  }

  return (
    <div className="container">
      <Header />
      {children}
    </div>
  );
};
