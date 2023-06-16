import { Resizer } from "@/shared/ui";

import { ChatListBtn } from "./chat-list-btn";
import { ChatListChats } from "./chat-list-chats";
import { ChatListNav } from "./chat-list-nav";

export const ChatsList = () => {
  return (
    <Resizer
      defaultSize={{ width: 320, height: "100%" }}
      minWidth={180}
      maxWidth={450}
      className="w-80"
      enable={{ right: true }}>
      <aside className="height-widget rounded-4 relative flex w-full flex-col overflow-hidden rounded-2xl bg-neutral">
        <ChatListNav />
        <ChatListChats />
        <ChatListBtn />
      </aside>
    </Resizer>
  );
};
