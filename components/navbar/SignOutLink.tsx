import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import { toast } from "sonner";
export default function SignOutLink() {
  function handleClick() {
    toast("You are successfully logged out.");
  }
  return (
    <SignOutButton>
      <Link href="/" className="w-full"></Link>
    </SignOutButton>
  );
}
