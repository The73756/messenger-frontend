import { ChatCard } from "@/entities/chat-card";

import { Resizer } from "@/shared/ui";

import { ChatListNav } from "./chat-list-nav";

export const ChatsList = () => {
  return (
    <Resizer enable={{ right: true }}>
      <aside className="rounded-[15px] bg-neutral w-[320px]">
        <ChatListNav />
      </aside>
      {/* <aside className="bordered mt-2 flex max-h-[92vh] w-full flex-col rounded bg-item py-2">
        <h2 className="mb-4 px-4 text-xl font-bold">Последние чаты</h2>
        <ul className="custom-scrollbar menu max-h-full flex-1 flex-nowrap overflow-auto px-2">
          {Array.from({ length: 10 }).map((_, index) => (
            // На активном чате добавляется "bordered" на li
            <li key={index} className={`${index === 0 ? "bordered" : ""} w-full`}>
              <ChatCard />
            </li>
          ))}
        </ul>
      </aside> */}
    </Resizer>
  );
};
