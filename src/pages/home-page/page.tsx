import { Chat } from "@/widgets/chat";
import { ChatInfo } from "@/widgets/chat-info";
import { ChatsList } from "@/widgets/chats-list";
import { MainLayout } from "@/widgets/layouts";
export const HomePage = () => {
  return (
    <MainLayout>
      <main>
        <div className="flex gap-2">
          <ChatsList />
          <Chat />
          <ChatInfo />
        </div>
      </main>
    </MainLayout>
  );
};
