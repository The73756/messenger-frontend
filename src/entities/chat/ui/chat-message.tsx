import { MessageStatus } from "@/shared/constants";
import { Icon } from "@/shared/ui";

interface ChatMessageProps {
  isUserMessage: boolean;
  status: MessageStatus;
}

export const ChatMessage = ({ isUserMessage, status }: ChatMessageProps) => {
  const classStatus = status === MessageStatus.CHECKED ? "" : "opacity-50" 

  if (isUserMessage) {
    return (
      <div className="chat chat-end">
        <div className="chat-bubble relative max-w-lg bg-primary py-2.5 pl-4 pr-16 text-white">
          <span>
            Not leave it in Darkness Not leave it in Darkness Not leave it in Darkness Not leave it
            in Darkness
          </span>
          <div className="absolute bottom-1 right-2.5 flex items-center gap-0.5">
            <time
              dateTime="2023-04-20 10:11"
              className="block text-xs opacity-50">
              10:11
            </time>
            <Icon name="chat/checked" className={"w-5 h-5 " + classStatus} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="chat chat-start">
      <div className="chat-bubble relative max-w-lg bg-primary/40 py-2.5 pl-4 pr-16 text-white">
        <span>Not leave it in Darkness</span>
        <div className="absolute bottom-1 right-2.5">
            <time
              dateTime="2023-04-20 10:11"
              className="block text-xs opacity-50">
              10:11
            </time>
          </div>
      </div>
    </div>
  );
};
