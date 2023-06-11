import { ChatHeaderInfo } from "./chat-header-info";
import { ChatHeaderNav } from "./chat-header-nav";

export const ChatHeader = () => {
  return (
    <div className="flex items-center justify-between py-2.5 px-6 bg-primary text-white">
      <ChatHeaderInfo />
      <ChatHeaderNav />
    </div>
  );
};
