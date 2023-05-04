import Image from "next/image";

import { Icon } from "@/shared/ui";
// TODO: декомпозировать на более мелкие компоненты

export const ChatInfo = () => {
  return (
    <div className="custom-scrollbar max-h-[92vh] w-full max-w-xs overflow-auto px-2">
      <div className="flex flex-1 items-center gap-4">
        <div className="avatar">
          <div className="w-14 rounded-full">
            <Image src="/image/avatar.jpg" alt="Ава чата" width="56" height="56" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-medium">Название чата</h3>
          <p className="chat-small">2 участника</p>
        </div>
      </div>
      <div className="mt-4 ">
        <div>
          <a href="#" className="link">
            @super-chat
          </a>
          <p className="chat-small">Ссылка</p>
        </div>
        <div className="mt-4">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
          <p className="chat-small">Описание</p>
        </div>
        <div className="divider"></div>

        <ul className="flex flex-col gap-1">
          <li>
            <button className="btn w-full justify-start gap-4 lowercase">
              <Icon name="chat/image" className="h-5 w-5" />
              <span>1 картинка</span>
            </button>
          </li>
          <li>
            <button className="btn w-full justify-start gap-4 lowercase">
              <Icon name="chat/video" className="h-5 w-5" />
              <span>1 видео</span>
            </button>
          </li>
          <li>
            <button className="btn w-full justify-start gap-4 lowercase">
              <Icon name="chat/file" className="h-5 w-5" />
              <span>1 файл</span>
            </button>
          </li>
          <li>
            <button className="btn w-full justify-start gap-4 lowercase">
              <Icon name="chat/music" className="h-5 w-5" />
              <span>1 аудиофайл</span>
            </button>
          </li>
          <li>
            <button className="btn w-full justify-start gap-4 lowercase">
              <Icon name="chat/micro" className="h-5 w-5" />
              <span>1 голосовое сообщение</span>
            </button>
          </li>
        </ul>
        <div className="divider"></div>
        <div>
          <h4 className="mb-2 text-xl">Участники</h4>
          <ul className="menu-no-active menu gap-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <li key={index}>
                <div className="rounded-lg py-2">
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <Image src="/image/avatar.jpg" alt="Ава чата" width="40" height="40" />
                    </div>
                  </div>
                  <div>
                    <strong className="font-semibold">The73756 🍕</strong>
                    <p className="text-sm text-primary">В сети</p>
                  </div>
                  <p className="mb-auto ml-auto text-sm text-primary">Владелец</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
