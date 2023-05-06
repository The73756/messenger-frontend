import { MainLayout } from "@/widgets/layouts";
import { UserProfile } from "@/widgets/user-profile";

import { asSyncComponent } from "@/shared/lib";

async function getData() {
  const res = await fetch("http://localhost:3000/api/hello");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export const AccountPage = asSyncComponent(async () => {
  const data = await getData();
  console.log(data);

  return (
    <MainLayout>
      <UserProfile />
    </MainLayout>
  );
});
