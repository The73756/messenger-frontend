import React, { useRef, useState } from "react";

import { Icon } from "@/shared/ui";

import { PhotoCrop } from "./photo-crop";

const acceptedFileTypes = ["image/jpeg", "image/png"];

// TODO: сделать обработку ошибок

export const PhotoPicker = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const filePath = useRef("");

  const handleFile = (file: File) => {
    if (!acceptedFileTypes.includes(file.type)) {
      console.log("Неверный тип файла");
      return;
    }

    setFile(file);
    filePath.current = URL.createObjectURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    if (file) {
      handleFile(file[0]);
    }
  };

  const dragEnterHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    let file = e.dataTransfer.files[0];

    handleFile(file);
    setIsDragOver(false);
  };

  return (
    <div>
      {file && filePath ? (
        <PhotoCrop filePath={filePath.current} fileName={file.name} />
      ) : (
        <div
          onDragEnter={dragEnterHandler}
          onDragLeave={dragLeaveHandler}
          onDragOver={dragEnterHandler}
          onDrop={dropHandler}
          className="relative">
          <div
            className={`${
              isDragOver ? "border-primary" : "border-gray-400"
            } flex flex-col items-center rounded-lg border-2 border-dashed px-6 py-6 transition-colors`}>
            <Icon name="chat/image" className="mb-1 h-8 w-8" />
            <p className="text-2xl">Перетащите файл для загрузки</p>
            <p className="mb-2">или</p>
            <label htmlFor="fileInput" className="btn text-lg normal-case">
              Выберите файл
            </label>
            <p className="text-gray-600 mt-4">Рекомендуем изображение 160х160</p>
          </div>
          <input
            id="fileInput"
            type="file"
            accept={acceptedFileTypes.join(" ")}
            className="sr-only"
            onChange={handleFileChange}
          />
          <div
            className={`${
              isDragOver ? "opacity-30" : "opacity-0"
            } pointer-events-none absolute inset-0 rounded-lg bg-primary transition-opacity`}></div>
        </div>
      )}
    </div>
  );
};
