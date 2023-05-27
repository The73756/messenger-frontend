"use client";

import { SubmitHandler, useForm } from "react-hook-form";

import { nameRule } from "@/shared/helpers";
import { Input } from "@/shared/ui";
import { Textarea } from "@/shared/ui/textarea";

interface IFormInputs {
  firstName: string;
  lastName: string;
  nickName: string;
  aboutMe: string;
}

export const ChangeUserInfo = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid, isDirty },
  } = useForm<IFormInputs>({
    mode: "onBlur",
    defaultValues: {
      firstName: "The73756",
      lastName: "",
      nickName: "the73756",
      aboutMe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
  });
  const watchNickName = watch("nickName");
  const watchAboutMe = watch("aboutMe");

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
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
        register={register("nickName", {
          required: true,
          pattern: {
            value: /^[a-zA-Z0-9_]+$/,
            message: "Разрешены только латинские буквы, цифры и _",
          },
        })}
        className="text-xl"
        label={`Ссылка на профиль - @${watchNickName}`}
        placeholder="super-ivan"
        error={errors.nickName}
        id="nickName"
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
