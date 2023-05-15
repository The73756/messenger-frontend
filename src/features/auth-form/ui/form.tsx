"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { registration } from "@/entities/user";

import { routes } from "@/shared/constants";
import { emailRule, nameRule, passwordRule } from "@/shared/helpers";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { Button, IconBtn, Input } from "@/shared/ui";

interface IFormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
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
  const { isReg, error } = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    dispatch(registration(data));
  };

  useEffect(() => {
    if (isReg) router.push(routes.LOGIN);
  }, [isReg]);

  return (
    <div className="flex flex-col items-center p-20 h-screen">
      <div>
        <div style={{ width: "120px", height: "120px" }} className="bg-white rounded-full mb-8"></div>
      </div>
      <h2 className="text-white text-center text-4xl mb-5 font-semibold">Регистрация</h2>
      {error && <p className="text-error text-sm">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "350px" }}>
        <div className="form-control w-full max-w-xl">
          <Input
            register={register("email", emailRule)}
            id="email"
            label="E-mail"
            error={errors.email}
            placeholder="user@gmail.com"
          />
          <Input
            register={register("name", nameRule)}
            id="name"
            label="Никнейм"
            error={errors.name}
            placeholder="Никнейм"
          />
          <Input
            register={register("password", passwordRule)}
            type="password"
            id="password"
            label="Пароль"
            error={errors.password}
            placeholder="Введите пароль"
          />
          <Input
            register={register("confirmPassword", passwordRule)}
            type="password"
            id="confirm-password"
            label="Повторите пароль"
            error={errors.password}
            placeholder="Повторите пароль"
          />
        </div>
        <div className="mt-4">
          <Button className="py-3 text-base min-w-full" type="submit">Зарегистрироваться</Button>
          <div className="flex justify-center mt-5">
            <Link href="/login">
              <p className="text-center text-xs font-medium">
                Есть аккаунт? Войти
              </p>
            </Link>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          <IconBtn name="social/google" />
          <IconBtn name="social/vkontakte" />
        </div>
      </form>
    </div>
  );
};
