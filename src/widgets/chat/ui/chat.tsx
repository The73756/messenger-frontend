import { ChatInput } from "@/features/chat-input";

import { ChatMessage } from "@/entities/chat-message";

import { MessageStatus } from "@/shared/constants";

import { ChatHeader } from "./chat-header";

export const Chat = () => {
  const getStatus = () =>
    Math.random() < 0.5
      ? Math.random() < 0.3
        ? MessageStatus.SENT
        : MessageStatus.CHECKED
      : MessageStatus.PENDING;

  return (
    <div className="flex max-h-[92vh] w-full flex-col ">
      <ChatHeader />
      <div className="custom-scrollbar flex-1 overflow-auto px-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <ChatMessage status={getStatus()} isUserMessage={Math.random() < 0.5} key={index} />
        ))}
      </div>
      <ChatInput />
    </div>
  );
};
