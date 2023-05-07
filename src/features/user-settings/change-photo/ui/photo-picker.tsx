import { useRef, useState } from "react";
import { FileUploader } from "react-drag-drop-files";

import { Icon } from "@/shared/ui";

import { PhotoCrop } from "./photo-crop";

export const PhotoPicker = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const filePath = useRef("");

  const onChange = (file: File) => {
    setFile(file);
    filePath.current = URL.createObjectURL(file);
    console.log(file);
  };

  return (
    <div>
      {file && filePath ? (
        <PhotoCrop filePath={filePath.current} fileName={file.name} />
      ) : (
        <FileUploader
          handleChange={onChange}
          dropMessageStyle={{ backgroundColor: "hsla(var(--p), 0.2)" }}
          hoverTitle=" "
          onDraggingStateChange={(dragging: boolean) => setIsDragOver(dragging)}>
          <div
            className={`${
              isDragOver ? "border-primary bg-primary/20" : "border-gray-400"
            } flex flex-col items-center rounded-lg border-2 border-dashed px-6 py-6 transition-colors`}>
            <Icon name="chat/image" className="mb-1 h-8 w-8" />
            <p className="text-2xl">Перетащите файл для загрузки</p>
            <p className="mb-2">или</p>
            <button className="btn text-lg normal-case">Выберите файл</button>
            <p className="text-gray-600 mt-4 ">Рекомендуем изображение 160х160</p>
          </div>
        </FileUploader>
      )}
    </div>
  );
};
