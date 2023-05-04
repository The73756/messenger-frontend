import { FriendsHeader } from "./friends-header";
import { FriendsList } from "./friends-list";

export const Friends = () => {
  return (
    <div className="flex h-[92vh] w-full flex-col">
      <FriendsHeader />
      <FriendsList />
    </div>
  );
};
