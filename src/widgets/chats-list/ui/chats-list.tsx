import { ChatCard } from "@/entities/chat-card";

export const ChatsList = () => {
  return (
    <aside className="bordered mt-2 flex max-h-[92vh] w-full max-w-xs flex-col">
      <h2 className="mb-4 px-4 text-xl font-bold">Последние чаты</h2>
      <ul className="custom-scrollbar menu max-h-full flex-1 flex-nowrap overflow-auto px-2">
        {Array.from({ length: 10 }).map((_, index) => (
          // На активном чате добавляется "bordered" на li
          <li key={index} className={`${index === 0 ? "bordered" : ""} w-full`}>
            <ChatCard />
          </li>
        ))}
      </ul>
    </aside>
  );
};
