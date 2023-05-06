"use client";

import Image from "next/image";
import { ChangeEvent, useState } from "react";

import { Icon, Popup } from "@/shared/ui";

import { PhotoAccept } from "./photo-accept";

export const ChangePhoto = () => {
  const [file, setFile] = useState<File | null>(null);
  const fileUrl = file ? URL.createObjectURL(file) : null;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const currentFile = e.target.files?.[0];
    if (currentFile) {
      setFile(currentFile);
      console.log(file);
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <label htmlFor="image">
        <div className="group avatar relative cursor-pointer overflow-hidden rounded-full">
          <div className="w-40">
            <Image width={160} height={160} src={fileUrl || "/image/avatar.jpg"} alt="Ваша ава" />
          </div>
          <div className="absolute bottom-0 h-1/3 w-full translate-y-full transform bg-neutral/60 transition-transform group-hover:translate-y-0">
            <div className="absolute right-1/2 top-1/2 flex -translate-y-1/2 translate-x-1/2 transform flex-col items-center">
              <Icon name="settings/photo" width={25} height={25} />
              <p className="text-center text-sm">Изменить</p>
            </div>
          </div>
        </div>
      </label>
      <Popup
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        contentLabel="Модальное окно для выбора нового изображения профиля">
        hello
      </Popup>
      {file && (
        <PhotoAccept
          onAccept={() => {
            console.log(file);
          }}
          onDiscard={() => setFile(null)}
        />
      )}
      <input type="file" id="image" className="hidden" onChange={handleChange} accept="image/*" />
    </>
  );
};
