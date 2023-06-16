import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/shared/ui";

export const WidgetInfoBody = () => {
  return (
    <div className="bg-primary mb-2.5">
      <div className="relative w-full h-[480px]">
        <Image
          src="/image/avatar.jpg"
          alt="Аватарка"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-1">
        <div className="mb-1 flex items-center gap-4 rounded-2xl bg-white/10 px-2.5 py-1">
          <Icon name="settings/info" className="h-6 w-6" />
          <div className="flex-1">
            <p className="text-xs font-medium">
              Публикуем топовые работы с Behance – всё, что нужно для вдохновения, мы собираем здесь{" "}
              <br /> <br />
              Онлайн события и сервисы для дизайнеров:{" "}
              <Link href="/" className="hover:underline">
                https://dsgnline.ru
              </Link>
            </p>
            <span className="mt-1 block text-sm opacity-70">Информация</span>
          </div>
        </div>
        <div className="flex items-center gap-4 px-2.5">
          <Icon name="settings/link" className="h-6 w-6" />
          <div className="flex-1">
            <Link href="/" className="text-xs font-medium hover:underline">https://t.me/+lhjzeIlRCPdhrhdfhr</Link>
            <span className="block text-sm opacity-70">Ссылка</span>
          </div>
        </div>
      </div>
    </div>
  );
};
