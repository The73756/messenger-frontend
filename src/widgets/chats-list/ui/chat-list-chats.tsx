import { ChatListItem } from "./chat-list-item";

export const ChatListChats = () => {
  return (
    <div className="px-2.5 py-5 h-max">
      <h4 className="mb-[15px] text-base font-medium">Последние чаты</h4>
      {/* прокрутку нужно будет здесь сделать */}
      <div className="">
        <ChatListItem href="/" messages={1} />
        <ChatListItem href="/" />
        <ChatListItem href="/" />
        <ChatListItem href="/" messages={1} />
        <ChatListItem href="/" messages={1} />
        <ChatListItem href="/" messages={1} />
        <ChatListItem href="/" />
        <ChatListItem href="/" />
        <ChatListItem href="/" />
        <ChatListItem href="/" messages={1} />
        <ChatListItem href="/" />
        <ChatListItem href="/" />
        <ChatListItem href="/" messages={1} />
        <ChatListItem href="/" />
        <ChatListItem href="/" />
        <ChatListItem href="/" messages={1} />
        <ChatListItem href="/" />
        <ChatListItem href="/" messages={1} />
        <ChatListItem href="/" messages={1} />
        <ChatListItem href="/" messages={1} />
      </div>
    </div>
  );
};
