import { useMemo, useState } from "react";

// import { Select } from "@/shared/ui";

import { cities } from "../consts";

export const ParametersSearch = () => {
  const [city, setCity] = useState<string>("");
  const [age, setAge] = useState(0);

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

  return (
    <div className="absolute right-0 mt-2 w-40 rounded bg-slate-700 p-2">
      <span className="mb-2 block text-sm font-medium">Город</span>
      {/*<Select value={city || "Выберите город"} arrayValues={cities} changeValue={changeCity} />*/}
    </div>
  );
};
