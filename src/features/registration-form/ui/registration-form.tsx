"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import { registration } from "@/entities/user";

import { routes } from "@/shared/constants";
import { emailRule, nickNameRule, passwordRule } from "@/shared/helpers";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { Button, IconBtn, Input } from "@/shared/ui";

interface IFormInputs {
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegistrationForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    getValues,
    clearErrors,
    formState: { errors, isValid },
  } = useForm<IFormInputs>({
    mode: "onBlur",
  });
  const { error } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    const regPromise = dispatch(registration(data))
      .unwrap()
      .then(() => {
        router.push(routes.LOGIN);
        clearErrors();
      });

    toast.promise(regPromise, {
      loading: "Регистрация...",
      success: "Успешно!",
      error: (err) => err,
    });
  };

  return (
    <div className="flex h-screen flex-col items-center p-20">
      <div>
        <div className="mb-8 h-[120px] w-[120px] rounded-full bg-white"></div>
      </div>
      <h2 className="mb-5 text-center text-4xl font-semibold text-white">Регистрация</h2>
      {error && <p className="text-sm text-error">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="w-[350px]">
        <div className="form-control w-full max-w-xl">
          <Input
            register={register("email", emailRule)}
            id="email"
            label="E-mail"
            error={errors.email}
            placeholder="user@gmail.com"
            autoComplete="email"
          />
          <Input
            register={register("nickname", nickNameRule)}
            id="name"
            label="Никнейм"
            error={errors.nickname}
            placeholder="Никнейм"
            autoComplete="nickname"
          />
          <Input
            register={register("password", passwordRule)}
            type="password"
            id="password"
            label="Пароль"
            error={errors.password}
            placeholder="Введите пароль"
            autoComplete="new-password"
          />
          <Input
            register={register("confirmPassword", {
              validate: (value) => value === getValues("password") || "Пароли не совпадают",
            })}
            type="password"
            id="confirm-password"
            label="Повторите пароль"
            error={errors.confirmPassword}
            placeholder="Повторите пароль"
            autoComplete="new-password"
          />
        </div>
        <div className="mt-4">
          <Button disabled={!isValid} className="min-w-full py-3 text-base" type="submit">
            Зарегистрироваться
          </Button>
          <div className="mt-5 flex justify-center">
            <Link href="/login">
              <p className="text-center text-xs font-medium">Есть аккаунт? Войти</p>
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
