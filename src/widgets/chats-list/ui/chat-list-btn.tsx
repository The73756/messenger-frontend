import React from "react";

import { Icon } from "@/shared/ui";

export const ChatListBtn = () => {
  return (
    <button className="btn absolute h-auto min-h-0 right-5 bottom-5 p-2.5 bg-white rounded-full text-primary hover:bg-primary hover:text-white">
      <Icon name="settings/pen" className="w-6 h-6" />
    </button>
  );
};
