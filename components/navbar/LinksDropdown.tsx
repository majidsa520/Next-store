import { links } from "@/utils/links";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlignLeft } from "lucide-react";
export default function LinksDropdown() {
  return (
    <div className="flex items-center gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <AlignLeft className="size-6" />
            {/* <img src="" width={28} className="rounded-full" /> */}
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          {links.map((link) => (
            <DropdownMenuItem key={link.href} asChild>
              <Link href={link.href} className="capitalize">
                {link.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
