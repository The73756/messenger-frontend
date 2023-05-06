import { ChangePhoto } from "@/features/user-settings";

export const UserProfile = () => {
  return (
    <div className="px-2">
      <div className="max-w-md">
        <ChangePhoto />
        <h2 className="text-xl font-medium">The73756</h2>
        <div className="chat-small">Ваше имя</div>
        <a href="#" className="link">
          @the73756
        </a>
        <div className="chat-small">Ссылка</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam, assumenda distinctio
          ea enim eos est
        </p>
        <div className="chat-small">Описание</div>
      </div>
    </div>
  );
};
