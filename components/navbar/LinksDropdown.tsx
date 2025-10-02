import { links } from "@/utils/links";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "../dropdown-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlignLeft, UserRoundPlus } from "lucide-react";
import UserIcon from "@/components/navbar/UserIcon";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
} from "@clerk/nextjs";
import { LuLogIn } from "react-icons/lu";
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";
export default function LinksDropdown() {
  return (
    <div className="flex items-center gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <AlignLeft className="size-6" />
            <SignedIn>
              <UserIcon />
            </SignedIn>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <SignedOut>
            <DropdownMenuItem>
              <SignInButton>
                <button className="flex w-full items-center gap-2 text-left">
                  <LuLogIn />
                  Sign in
                </button>
              </SignInButton>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SignUpButton>
                <button className="flex w-full items-center gap-2 text-left">
                  <UserRoundPlus />
                  Sign up
                </button>
              </SignUpButton>
            </DropdownMenuItem>
          </SignedOut>

          {links.map((link) => (
            <DropdownMenuItem key={link.href} asChild>
              {!link.protected && (
                <Link href={link.href} className="capitalize">
                  {link.label}
                </Link>
              )}
            </DropdownMenuItem>
          ))}
          <SignedIn>
            {links.map((link) => (
              <DropdownMenuItem key={link.href} asChild>
                {link.protected && (
                  <Link href={link.href} className="capitalize">
                    {link.label}
                  </Link>
                )}
              </DropdownMenuItem>
            ))}
          </SignedIn>
          <SignedIn>
            <DropdownMenuSeparator className="" />
            <DropdownMenuItem>
              <SignOutButton>
                <button className="w-full text-left">Sign out</button>
              </SignOutButton>
            </DropdownMenuItem>
          </SignedIn>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
