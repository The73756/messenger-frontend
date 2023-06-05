import { NextPage } from "next";

import { FriendsPage } from "@/pages/friends-page";

export const metadata = {
  title: "Messenger - Мои друзья",
  description: "Мои друзья в Messenger",
};

const Friends: NextPage = () => {
  return <FriendsPage />;
};

export default Friends;
