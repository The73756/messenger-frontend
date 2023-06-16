"use client";

import { useState, ChangeEvent } from "react";
import TextareaAutosize from "react-textarea-autosize";

import { Icon } from "@/shared/ui";

export const ChatInput = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="flex gap-4 pt-2.5 text-white">
      <button className="btn-fill btn-circle btn h-12 w-12">
        <Icon name="settings/smiley" className="h-8 w-8" />
      </button>
      <div className="flex flex-1 items-start rounded-2xl bg-primary">
        <TextareaAutosize
          value={message}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
          maxRows={8}
          placeholder="Напишите сообщение..."
          className="flex-1 resize-none self-center bg-transparent py-2.5 pl-5 placeholder-current scrollbar-none focus:outline-none"
        />
        <div className="dropdown-top dropdown">
          <ul tabIndex={0} className="dropdown-content mb-2.5">
            <li className="flex cursor-pointer items-center gap-2.5 whitespace-nowrap rounded-2xl p-1.5 hover:bg-white/10">
              <Icon name="settings/picture" className="h-5 w-5" />
              Фото или видео
            </li>
            <li className="flex cursor-pointer items-center gap-2.5 whitespace-nowrap rounded-2xl p-1.5 hover:bg-white/10">
              <Icon name="chat/file" className="h-5 w-5" />
              Файлы
            </li>
            <li className="flex cursor-pointer items-center gap-2.5 whitespace-nowrap rounded-2xl p-1.5 hover:bg-white/10">
              <Icon name="settings/gift" className="h-5 w-5" />
              Gift Premium
            </li>
          </ul>
          <button tabIndex={0} className="px-5 py-3 transition-opacity hover:opacity-50">
            <Icon name="chat/clip" className="h-6 w-6" />
          </button>
        </div>
      </div>
      <button className="btn-fill btn-circle btn h-12 w-12">
        <Icon name="settings/microphone" className="h-8 w-8" />
      </button>
    </div>
    // <div className="mt-4 flex gap-2">
    //   <form className="flex w-full gap-2">
    //     <label htmlFor="file">
    //       {/* Если сделать кнопкой, label не срабатывает */}
    //       <div className="no-animation btn flex h-12 w-12 items-center justify-center rounded-full p-0 ">
    //         <Icon name="chat/clip" className="h-5 w-5 " />
    //       </div>
    //     </label>
    //     <input type="file" id="file" className="hidden" />
    //     <input
    //       type="text"
    //       value={message}
    //       onChange={(e) => setMessage(e.target.value)}
    //       className="input-bordered input w-full"
    //       placeholder="Ваше сообщение..."
    //     />
    //   </form>
    //   <IconBtn name="chat/smile" iconClassName="h-6 w-6" />
    //   <IconBtn name={`chat/${message ? "send" : "micro"}`} iconClassName={message && "ml-[3px]"} />
    // </div>
  );
};
