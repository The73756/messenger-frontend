"use client";

import Image from "next/image";
import { useState } from "react";

import { Icon, Popup } from "@/shared/ui";

import { PhotoCarousel } from "./photo-carousel";

export const ChangePhoto = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="group avatar relative cursor-pointer overflow-hidden rounded-full">
        <button className="w-40" onClick={() => setIsModalOpen(true)}>
          <Image width={160} height={160} src={"/image/avatar.jpg"} alt="Ваша ава" />
          <div className="absolute bottom-0 h-1/3 w-full translate-y-full transform bg-neutral/60 transition-transform group-hover:translate-y-0">
            <div className="absolute right-1/2 top-1/2 flex -translate-y-1/2 translate-x-1/2 transform flex-col items-center">
              <Icon name="settings/photo" width={25} height={25} />
            </div>
          </div>
        </button>
      </div>
      <Popup
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        contentLabel="Модальное окно с аватарками пользователя">
        <PhotoCarousel />
      </Popup>
    </>
  );
};
