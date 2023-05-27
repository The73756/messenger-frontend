"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { login, checkAuth } from "@/entities/user";

import { emailRule, passwordRule } from "@/shared/helpers";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { Button, IconBtn, Input } from "@/shared/ui";

interface IFormInputs {
  email: string;
  password: string;
}

export const Form = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    mode: "onBlur",
  });
  const { isAuth, error } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    dispatch(login(data));
  };

  // useEffect(() => {
  // if (isAuth) router.push("/");
  // }, [isAuth]);

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return (
    <div className="flex flex-col items-center p-20">
      <div>
        <div className="mb-8 h-[120px] w-[120px] rounded-full bg-white"></div>
      </div>
      <h2 className="mb-5 text-center text-4xl font-semibold text-white">
        Войти
      </h2>
      {error && <p className="text-error">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="w-[350px]">
        <div className="form-control w-full max-w-xl">
          <Input
            register={register("email", emailRule)}
            id="email"
            label="E-mail"
            error={errors.email}
            placeholder="user@gmail.com"
          />
          <Input
            register={register("password", passwordRule)}
            type="password"
            id="password"
            label="Пароль"
            error={errors.password}
            placeholder="Введите пароль"
          />
        </div>
        <div className="mt-4">
          <Button className="min-w-full py-3 text-base" type="submit">
            Войти
          </Button>
          <div className="mt-5 flex justify-center">
            <Link href="/auth">
              <p className="text-center text-xs font-medium">
                Нет аккаунта? Зарегистрируйтесь
              </p>
            </Link>
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          <IconBtn name="social/google" />
          <IconBtn name="social/vkontakte" />
        </div>
      </form>
    </div>
  );
};
