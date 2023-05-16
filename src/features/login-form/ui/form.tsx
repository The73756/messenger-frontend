"use client";

import Link from "next/link";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { checkAuth, login } from "@/entities/user";

import { emailRule, passwordRule } from "@/shared/helpers";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { IconBtn, Input } from "@/shared/ui";

interface IFormInputs {
  email: string;
  password: string;
}

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    mode: "onBlur",
  });
  const { error } = useAppSelector((state) => state.user);
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
    <div className="flex flex-col items-center border-r-8 p-20">
      <h2 className="text-center text-2xl text-white">Вход</h2>
      {error && <p className="text-error">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <div className="mt-4 flex items-center gap-4">
          <button className="btn" type="submit">
            Войти
          </button>
          <Link href="/auth">Нет аккаунта? Зарегистрируйтесь</Link>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          <IconBtn name="social/google" />
          <IconBtn name="social/vkontakte" />
        </div>
      </form>
    </div>
  );
};
