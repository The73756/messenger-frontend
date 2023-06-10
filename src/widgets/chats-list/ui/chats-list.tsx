import { Resizer } from "@/shared/ui";

import { ChatListBtn } from "./chat-list-btn";
import { ChatListChats } from "./chat-list-chats";
import { ChatListNav } from "./chat-list-nav";

export const ChatsList = () => {
  return (
    <Resizer enable={{ right: true }}>
      <aside className="relative rounded-[15px] bg-neutral w-[320px] height-widget flex flex-col">
        <ChatListNav />
        <ChatListChats />
        <ChatListBtn />
      </aside>
    </Resizer>
  );
};
