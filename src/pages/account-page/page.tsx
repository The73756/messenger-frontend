"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { MainLayout } from "@/widgets/layouts";
import { UserProfile } from "@/widgets/user-profile";

import { checkAuth } from "@/entities/user";

import { routes } from "@/shared/constants";
import { useAppDispatch } from "@/shared/model";

export const AccountPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (() => {
      dispatch(checkAuth())
        .unwrap()
        .then(() => {
          setIsLoading(false);
        })
        .catch(() => {
          router.push(routes.LOGIN);
        });
    })();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <MainLayout>
      <UserProfile />
    </MainLayout>
  );
};
