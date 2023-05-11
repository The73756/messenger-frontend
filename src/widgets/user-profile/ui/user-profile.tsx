import { ChangePhoto, ChangeUserInfo } from "@/features/user-settings";

export const UserProfile = () => {
  return (
    <div className="flex w-full gap-2 px-2">
      <div className="w-full max-w-md">
        <ChangePhoto />

        <ChangeUserInfo />
      </div>
    </div>
  );
};
