import { ChatsList } from "@/widgets/chats-list";
import { Friends } from "@/widgets/friends";
import { MainLayout } from "@/widgets/layouts";

export const FriendsPage = () => {
  return (
    <MainLayout>
      <main>
        <div className="flex gap-2">
          <ChatsList />
          <Friends />
        </div>
      </main>
    </MainLayout>
  );
};
