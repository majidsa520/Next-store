"use client";
import { Button } from "@/components/ui/button";
import { adminLinks } from "@/utils/links";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const path = usePathname();
  return (
    <aside className="flex flex-col gap-2">
      {adminLinks.map(({ href, label }) => (
        <Button
          key={href}
          variant={href === path ? "default" : "ghost"}
          asChild
          className="px-4"
        >
          <Link href={href} className="justify-start px-8">
            {label}
          </Link>
        </Button>
      ))}
    </aside>
  );
}
