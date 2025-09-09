import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { VscCode } from "react-icons/vsc";

export default function Logo() {
  return (
    <Link href="/" className="">
      <Button size="icon" asChild className="bg-primary px-1">
        <VscCode className="size-6" />
      </Button>
    </Link>
  );
}
