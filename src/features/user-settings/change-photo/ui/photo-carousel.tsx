import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { Icon, IconBtn } from "@/shared/ui";

import { PhotoPicker } from "./photo-picker";

const images = new Array(10).fill(0).map((_, idx) => idx);

export const PhotoCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPhotoEditing, setIsPhotoEditing] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    inViewThreshold: 0.8,
  });
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaApi || !emblaThumbsApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi, emblaThumbsApi],
  );

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaApi.selectedScrollSnap());
  }, [emblaApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  if (isPhotoEditing) {
    return <PhotoPicker />;
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="relative overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex max-w-[500px] gap-2">
          {images.map((_, idx) => (
            <div key={idx} className="relative h-full w-full flex-shrink-0 flex-grow-0 basis-full">
              <Image
                width={500}
                height={500}
                src={"/image/avatar.jpg"}
                className="w-full rounded-lg"
                alt="Ваша ава"
              />
            </div>
          ))}
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button className="btn-circle btn" onClick={scrollPrev}>
            <Icon name="figures/arrow" className="h-4 w-4 rotate-90 transform"></Icon>
          </button>
          <button className="btn-circle btn" onClick={scrollNext}>
            <Icon name="figures/arrow" className="h-4 w-4 -rotate-90 transform"></Icon>
          </button>
        </div>
      </div>
      <div className="max-w-[500px] overflow-hidden" ref={emblaThumbsRef}>
        <div className="flex w-full gap-2">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`${
                selectedIndex === idx ? "opacity-100" : "opacity-40"
              } relative flex-shrink-0 flex-grow-0 basis-[75px] cursor-pointer`}
              onClick={() => onThumbClick(idx)}>
              <Image width={75} height={75} src={"/image/avatar.jpg"} className="" alt="Ваша ава" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="chat-small w-full">
          <p>
            Фотография {selectedIndex + 1} из {images.length}
          </p>
          <time dateTime="12.12.2012:12:35">The73756 12.12.2012 в 12:35</time>
        </div>
        <div className="flex gap-2">
          <IconBtn
            name="settings/delete"
            onClick={() => console.log("Удалить " + selectedIndex)}
            title="Удалить это аватарку"
          />
          <IconBtn
            name="settings/photo"
            onClick={() => setIsPhotoEditing(true)}
            title="Добавить аватарку"
          />
        </div>
      </div>
    </div>
  );
};
