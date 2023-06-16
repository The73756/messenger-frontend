import { ChatNavBtn } from "./chat-nav-btn";

export const ChatListNav = () => {
  return (
    <div className="flex overflow-x-auto overflow-y-hidden border-b-[1px] border-white px-4 pt-1 scrollbar-none">
      <ChatNavBtn>Все чаты</ChatNavBtn>
      <ChatNavBtn>Чат номер 2</ChatNavBtn>
      <ChatNavBtn>Чат номер 3</ChatNavBtn>
      <ChatNavBtn>Чат номер 4</ChatNavBtn>
    </div>
  );
};
