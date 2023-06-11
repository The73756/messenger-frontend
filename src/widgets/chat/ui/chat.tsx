import { ChatInput } from "@/features/chat-input";

import { ChatBody } from "./chat-body";
import { ChatHeader } from "./chat-header";

export const Chat = () => {

  return (
    <div className="height-widget rounded-xl flex-1 overflow-hidden flex flex-col">
      <ChatHeader />
      <ChatBody />
      <ChatInput />
    </div>
  );
};
