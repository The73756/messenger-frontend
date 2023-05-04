import { ChatInput } from "@/features/chat-input";

import { ChatMessage } from "@/entities/chat-message";

import { MessageStatus } from "@/shared/constants";
import { Icon } from "@/shared/ui";

export const Chat = () => {
  const getStatus = () =>
    Math.random() < 0.5
      ? Math.random() < 0.3
        ? MessageStatus.SENT
        : MessageStatus.CHECKED
      : MessageStatus.PENDING;

  return (
    <div className="flex max-h-[92vh] w-full flex-col">
      <div className="navbar bg-base-100">
        <div className="flex flex-1 items-center gap-4">
          <div>
            <h2 className="text-xl font-medium">Название чата</h2>
            <p className="chat-small">2 участника, 1 в сети</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="opacity-80 transition-opacity hover:opacity-100">
            <Icon name="chat/search" className="h-5 w-5" />
          </button>
          <button className="opacity-80 transition-opacity hover:opacity-100">
            <Icon name="chat/sidebar" className="h-5 w-5" />
          </button>
          <button className="opacity-80 transition-opacity hover:opacity-100">
            <Icon name="chat/dots" className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="divider mb-0 mt-0 px-2"></div>
      <div className="custom-scrollbar flex-1 overflow-auto px-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <ChatMessage status={getStatus()} isUserMessage={Math.random() < 0.5} key={index} />
        ))}
      </div>
      <ChatInput />
    </div>
  );
};
