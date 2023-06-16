import { ChatCard } from "@/entities/chat";

export const ChatListChats = () => {
  return (
    <div className="px-2.5 py-5 flex-1 overflow-y-auto scroll">
      <h4 className="mb-[15px] text-base font-medium">Последние чаты</h4>
      <div className="">
        <ChatCard href="/" messages={1} />
        <ChatCard href="/" />
        <ChatCard href="/" />
        <ChatCard href="/" messages={1} />
        <ChatCard href="/" messages={1} />
        <ChatCard href="/" messages={1} />
        <ChatCard href="/" />
        <ChatCard href="/" />
        <ChatCard href="/" />
        <ChatCard href="/" messages={1} />
        <ChatCard href="/" />
        <ChatCard href="/" />
        <ChatCard href="/" messages={1} />
        <ChatCard href="/" />
        <ChatCard href="/" />
        <ChatCard href="/" messages={1} />
        <ChatCard href="/" />
        <ChatCard href="/" messages={1} />
        <ChatCard href="/" messages={1} />
        <ChatCard href="/" messages={1} />
      </div>
    </div>
  );
};
