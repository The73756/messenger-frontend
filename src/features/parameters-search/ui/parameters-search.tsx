import { useMemo, useState } from "react";

import { Select } from "@/shared/ui";
import { Radio } from "@/shared/ui/radio";

import { cities } from "../consts";

export const ParametersSearch = () => {
  const [city, setCity] = useState<string>("");
  const [minAge, setMinAge] = useState(14);
  const [maxAge, setMaxAge] = useState(80);

  const ages = useMemo((): number[] => {
    const array = [];
    for (let i = 14; i <= 80; i++) {
      array.push(i);
    }

    return array;
  }, []);

  const changeCity = (city: string) => {
    setCity(city);
  };

  const changeMinAge = (age: number) => {
    setMinAge(age);
  };

  const changeMaxAge = (age: number) => {
    setMaxAge(age);
  };

  return (
    <div tabIndex={0} className="absolute shadow right-0 mt-2 w-40 rounded bg-slate-700 p-2 dropdown-content">
      <span className="mb-2 block text-sm font-medium">Город</span>
      <Select value={city || "Выберите город"} items={cities} changeValue={changeCity} />
      <span className="mt-2 mb-2 block text-sm font-medium">Возраст</span>
      <div className="flex items-center">
        <span className="block text-sm mr-2">от</span>
        <Select value={minAge} items={ages} changeValue={changeMinAge} />
        <span className="block text-sm ml-auto mr-2">до</span>
        <Select value={maxAge} items={ages} changeValue={changeMaxAge} />
      </div>
      <span className="mb-2 block text-sm font-medium">Пол</span>
      <div className="flex flex-col gap-1">
        <Radio value="Мужской" name="sex" id="sex-men" />
        <Radio value="Женский" name="sex" id="sex-women" />
        <Radio value="Неважно" name="sex" id="no-sex" checked={true} />
      </div>
    </div>
  );
};
