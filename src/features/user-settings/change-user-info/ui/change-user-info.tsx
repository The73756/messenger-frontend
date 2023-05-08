"use client";
import { SubmitHandler, useForm } from "react-hook-form";

import { nameRule } from "@/shared/helpers";
import { useInput } from "@/shared/lib/hooks";
import { Input } from "@/shared/ui";

interface IFormInputs {
  name: string;
  link: string;
  desc: string;
}

export const ChangeUserInfo = () => {
  const nickName = useInput("The73756");
  const link = useInput("the73756");
  const desc = useInput(
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam, assumenda distinctio ea nim eos est",
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <form className="flex max-w-md flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register("name", nameRule)}
        className="text-xl"
        label="Ваше имя"
        error={errors.name}
        {...nickName}
      />

      <Input
        register={register("link", {
          required: "Это поле обязательно",
          pattern: {
            value: /^[a-zA-Z0-9_]+$/,
            message: "Разрешены только латинские буквы, цифры и _",
          },
        })}
        className="text-xl"
        label={`Ссылка на профиль - @${link.value}`}
        error={errors.link}
        {...link}
      />

      <label>
        <div className="input-info">Пару слов о себе</div>
        {/*<textarea*/}
        {/*  className="custom-scrollbar textarea-bordered textarea textarea-lg  h-auto w-full max-w-md resize-none px-2  py-1"*/}
        {/*  {...desc}*/}
        {/*/>*/}
      </label>
    </form>
  );
};
