import { currentUser, auth } from "@clerk/nextjs/server";
import { LucideUser2 } from "lucide-react";
export default async function UserIcon() {
  // for getting basic info about user authentication and authorization
  const immidiateUser = await auth();

  // for getting full user info after checking auth. (could be null if user is not authenticated)
  const user = await currentUser();

  const avatarImage = user?.imageUrl;
  if (avatarImage)
    return (
      <img src={avatarImage} className="size-6 rounded-full object-cover" />
    );
  return <LucideUser2 className="size-6 rounded-full object-cover" />;
}
