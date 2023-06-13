"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import { login } from "@/entities/user";

import { routes } from "@/shared/constants";
import { emailRule, passwordRule } from "@/shared/helpers";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { Button, IconBtn, Input } from "@/shared/ui";

interface IFormInputs {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors, isValid },
  } = useForm<IFormInputs>({
    mode: "onBlur",
  });
  const { error } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    const loginPromise = dispatch(login(data))
      .unwrap()
      .then((user) => {
        if (!user.nickname || !user.firstName) {
          router.push(routes.ACCOUNT);
        } else {
          router.push(routes.HOME);
        }
        clearErrors();
      });

    toast.promise(loginPromise, {
      loading: "Вход...",
      success: "Добро пожаловать!",
      error: (err) => err,
    });
  };

  return (
    <div className="flex flex-col items-center p-20">
      <div>
        <div className="mb-8 h-[120px] w-[120px] rounded-full bg-white"></div>
      </div>
      <h2 className="mb-5 text-center text-4xl font-semibold text-white">Войти</h2>
      {error && <p className="text-error">{error}</p>}
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
            register={register("password", passwordRule)}
            type="password"
            id="password"
            label="Пароль"
            error={errors.password}
            placeholder="Введите пароль"
            autoComplete="current-password"
          />
        </div>
        <div className="mt-4">
          <Button disabled={!isValid} className="min-w-full py-3 text-base" type="submit">
            Войти
          </Button>
          <div className="mt-5 flex justify-center">
            <Link href="/auth">
              <p className="text-center text-xs font-medium">Нет аккаунта? Зарегистрируйтесь</p>
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
