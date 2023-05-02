import { FriendsNav } from "../../friends-nav/ui/friends-nav";

import { FriendsHeader } from "./friends-header";
import { FriendsList } from "./friends-list";

export const Friends = () => {
  return (
    <div className="w-full h-[92vh] flex flex-col">
      <FriendsHeader />
      <FriendsList />
    </div>
  );
};
