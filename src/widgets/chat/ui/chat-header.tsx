import { ChatHeaderInfo } from "./chat-header-info";
import { ChatHeaderNav } from "./chat-header-nav";

export const ChatHeader = () => {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-primary px-6 py-2.5 text-white">
      <ChatHeaderInfo />
      <ChatHeaderNav />
    </div>
  );
};
