import { Icon } from "@/shared/ui";

export const ChatHeader = () => {
  return (
    <div>
      <div className="navbar bg-base-100 px-0">
        <div className="flex flex-1 items-center gap-4">
          <div>
            <h2 className="text-xl font-medium">Название чата</h2>
            <p className="chat-small">2 участника, 1 в сети</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="opacity-80 transition-opacity hover:opacity-100">
            <Icon name="chat/search" className="h-5 w-5" />
          </button>
          <button className="opacity-80 transition-opacity hover:opacity-100">
            <Icon name="chat/sidebar" className="h-5 w-5" />
          </button>
          <button className="opacity-80 transition-opacity hover:opacity-100">
            <Icon name="chat/dots" className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="divider mb-0 mt-0 px-2"></div>
    </div>
  );
};
