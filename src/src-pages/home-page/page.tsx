import { Chat } from "@/widgets/chat";
import { ChatsList } from "@/widgets/chats-list";
import { MainLayout } from "@/widgets/layouts";
import { WidgetInfo } from "@/widgets/widget-info";

export const HomePage = () => {
  return (
    <MainLayout>
      <main>
        <div className="flex gap-4">
          <ChatsList />
          <Chat />
          <WidgetInfo />
        </div>
      </main>
    </MainLayout>
  );
};
