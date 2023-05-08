import { ChangePhoto, ChangeUserInfo } from "@/features/user-settings";

export const UserProfile = () => {
  return (
    <div className="px-2">
      <div className="max-w-md">
        <ChangePhoto />
      </div>

      <ChangeUserInfo />
    </div>
  );
};
