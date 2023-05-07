import { useCallback, useState } from "react";
import Cropper, { Area } from "react-easy-crop";

import { IconBtn } from "@/shared/ui";

import getCroppedImg from "../lib/get-cropped-img";

interface PhotoCropProps {
  filePath: string;
  fileName: string;
}

export const PhotoCrop = ({ filePath, fileName }: PhotoCropProps) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [flip, setFlip] = useState({ horizontal: false, vertical: false });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleResultImage = useCallback(async () => {
    if (!croppedAreaPixels) {
      return;
    }

    try {
      const croppedImageBlob = await getCroppedImg(filePath, croppedAreaPixels, rotation, flip);
      if (croppedImageBlob) {
        const imageFile = new File([croppedImageBlob], fileName, { type: "image/jpeg" });
        console.log(imageFile);
      }
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, rotation, flip]);

  return (
    <div className="min-h-600 relative flex flex-col gap-4">
      <div className="relative h-[400px]">
        <Cropper
          crop={crop}
          onCropChange={setCrop}
          classes={{
            cropAreaClassName: "border-2 border-primary rounded-full",
            containerClassName: "bg-transparent max-h-[400px] m-auto rounded-lg max-w-[400px]",
            mediaClassName: "",
          }}
          transform={[
            `translate(${crop.x}px, ${crop.y}px)`,
            `rotateZ(${rotation}deg)`,
            `rotateY(${flip.horizontal ? 180 : 0}deg)`,
            `rotateX(${flip.vertical ? 180 : 0}deg)`,
            `scale(${zoom})`,
          ].join(" ")}
          zoom={zoom}
          onZoomChange={setZoom}
          aspect={1}
          onCropComplete={onCropComplete}
          image={filePath}
        />
      </div>

      <div className="mx-auto my-auto ml-auto flex gap-2">
        <IconBtn
          name="settings/flip"
          title="Отразить по горизонтали"
          onClick={() => {
            setFlip((prev) => ({ horizontal: !prev.horizontal, vertical: prev.vertical }));
            setRotation((prev) => 360 - prev);
          }}
        />
        <IconBtn
          name="settings/flip"
          iconClassName={"transform rotate-90"}
          title="Отразить по вертикали"
          onClick={() => {
            setFlip((prev) => ({ horizontal: prev.horizontal, vertical: !prev.vertical }));
            setRotation((prev) => 360 - prev);
          }}
        />
        <IconBtn
          name="settings/rotate"
          title="Поворот по часовой"
          onClick={() => setRotation((prev) => prev + 90)}
        />
        <IconBtn
          name="settings/save"
          title="Сохранить"
          className="text-success"
          onClick={handleResultImage}
        />
      </div>
    </div>
  );
};
