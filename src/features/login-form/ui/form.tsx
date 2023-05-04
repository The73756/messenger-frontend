"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

import { emailRule, passwordRule } from "@/shared/helpers";
import { IconBtn, Input } from "@/shared/ui";

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

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
    void router.push("/");
  };

  return (
    <div className="flex flex-col items-center border-r-8 p-20">
      <h2 className="text-white text-center text-2xl">Вход</h2>
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
