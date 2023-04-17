import { RegisterOptions } from "react-hook-form";

export const emailRule: RegisterOptions = {
  required: "Это обязательное поле!",
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "Неверный формат email!",
  },
};

export const nameRule: RegisterOptions = {
  required: "Это обязательное поле!",
  minLength: {
    value: 2,
    message: "Минимальная длина 2 символа!",
  },
};

export const passwordRule: RegisterOptions = {
  required: "Это обязательное поле!",
};
