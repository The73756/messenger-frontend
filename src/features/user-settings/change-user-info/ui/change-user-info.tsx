"use client";

import { SubmitHandler, useForm } from "react-hook-form";

import { userApi, update } from "@/entities/user";

import { UserUpdate } from "@/shared/constants";
import { nameRule } from "@/shared/helpers";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { Input, Textarea } from "@/shared/ui";

interface IFormInputs {
  firstName: string;
  lastName: string;
  nickname: string;
  aboutMe: string;
}

export const ChangeUserInfo = () => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid, isDirty },
  } = useForm<IFormInputs>({
    mode: "onBlur",
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      nickname: user?.nickname,
      aboutMe: user?.aboutMe,
    },
  });
  const watchNickname = watch("nickname");
  const watchAboutMe = watch("aboutMe");

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    // const updateUser: UserUpdate = {
    //   ...user,
    //   ...data
    // }
    // console.log(updateUser)
    // dispatch(update(...data))
  };

  return (
    <form className="flex max-w-md flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register("firstName", nameRule)}
        className="text-xl"
        placeholder="Иван"
        label="Имя"
        error={errors.firstName}
        id="firstName"
      />

      <Input
        register={register("lastName", {
          ...nameRule,
          required: false,
        })}
        className="text-xl"
        placeholder="Иванов"
        label="Фамилия (необязательно)"
        error={errors.lastName}
        id="lastName"
      />

      <Input
        register={register("nickname", {
          required: true,
          pattern: {
            value: /^[a-zA-Z0-9_]+$/,
            message: "Разрешены только латинские буквы, цифры и _",
          },
        })}
        className="text-xl"
        label={`Ссылка на профиль - @${watchNickname}`}
        placeholder="super-ivan"
        error={errors.nickname}
        id="nickname"
      />

      <Textarea
        label={`О себе - ${watchAboutMe.trim().length}/100 (необязательно)`}
        labelClassName={watchAboutMe.trim().length > 100 ? "label-error" : ""}
        placeholder="Иван, 16 лет, ищет горячую чику постарше"
        register={register("aboutMe", {
          maxLength: {
            value: 100,
            message: "Максимальная длина 100 символов",
          },
        })}
        error={errors.aboutMe}
        maxRows={4}
        id="aboutMe"
      />
      {isDirty && (
        <div className="flex gap-2">
          <button className="btn-primary btn" type="submit" disabled={!isValid}>
            Сохранить
          </button>
          <button className="btn" onClick={() => reset()}>
            Отмена
          </button>
        </div>
      )}
    </form>
  );
};
