import { auth } from "@clerk/nextjs/server";
import type { ReactNode } from "react";
export default async function Admin({ children }: { children: ReactNode }) {
  const { userId } = await auth();
  const isAdmin = userId === process.env.ADMIN_USER_ID;
  if (isAdmin) return children;
  return null;
}
