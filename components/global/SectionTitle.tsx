import { Separator } from "@/components/ui/separator";
import type { ReactNode } from "react";
export default function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="">
      <h2 className="mb-8 text-3xl font-medium tracking-wider capitalize">
        {children}
      </h2>
      <Separator />
    </div>
  );
}
