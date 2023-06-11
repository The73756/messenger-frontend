import { ChatMessage } from "@/entities/chat";

import { MessageStatus } from "@/shared/constants";

export const ChatBody = () => {
  const getStatus = () =>
    Math.random() < 0.5
      ? Math.random() < 0.3
        ? MessageStatus.SENT
        : MessageStatus.CHECKED
      : MessageStatus.PENDING;

  return (
    <div className="scrollbar-none flex-1 oveflow-hidden overflow-y-auto px-4">
      {Array.from({ length: 10 }).map((_, index) => (
        <ChatMessage status={getStatus()} isUserMessage={Math.random() < 0.5} key={index} />
      ))}
    </div>
  );
};
