import { ChatCard } from "@/entities/chat-card";

import { Resizer } from "@/shared/ui";

import { ChatListChats } from "./chat-list-chats";
import { ChatListNav } from "./chat-list-nav";

export const ChatsList = () => {
  return (
    <Resizer enable={{ right: true }}>
      <aside className="rounded-[15px] bg-neutral w-[320px] height-widget overflow-y-auto scrollbar scrollbar-thumb-primary scrollbar-w-[3px]">
        <ChatListNav />
        <ChatListChats />
      </aside>
    </Resizer>
  );
};
