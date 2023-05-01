import { FriendsHeader } from "./friends-header";
import { FriendsList } from "./friends-list";


export const Friends = () => {
  return (
    <div className="w-full">
      <FriendsHeader />
      <FriendsList />
    </div>
  );
};
