import { UserFriend } from "@/entities/user-friend";

export const FriendsList = () => {
  return (
    <div className="flex-1 overflow-y-auto">
      <UserFriend />
      <UserFriend />
      <UserFriend />
    </div>
  );
};
