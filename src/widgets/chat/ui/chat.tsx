import { ChatInput } from "@/features/chat-input";

import { ChatBody } from "./chat-body";
import { ChatHeader } from "./chat-header";

export const Chat = () => {
  return (
    <div className="height-widget flex flex-1 flex-col overflow-hidden rounded-xl">
      <ChatHeader />
      <ChatBody />
      <ChatInput />
    </div>
  );
};
