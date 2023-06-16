"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import { updateUser } from "@/entities/user";

import { updateUserData } from "@/shared/api";
import { nameRule, nickNameRule } from "@/shared/helpers";
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
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      nickname: user?.nickname || "",
      aboutMe: user?.aboutMe || "",
    },
  });
  const watchNickname = watch("nickname");
  const watchAboutMe = watch("aboutMe");

  const onSubmit: SubmitHandler<IFormInputs> = (userData) => {
    if (user) {
      const updateUserObject: updateUserData = {
        userId: user.id,
        userData,
      };
      const updatePromise = dispatch(updateUser(updateUserObject))
        .unwrap()
        .then(() => {
          reset(userData);
        });

      toast.promise(updatePromise, {
        loading: "Сохраняем...",
        success: "Сохранено!",
        error: (err) => err,
      });
    }
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
        autoComplete="name"
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
        autoComplete="family-name"
      />

      <Input
        register={register("nickname", nickNameRule)}
        className="text-xl"
        label={`Псевдоним - @${watchNickname}`}
        placeholder="super_ivan"
        error={errors.nickname}
        id="nickname"
        autoComplete="nickname"
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
