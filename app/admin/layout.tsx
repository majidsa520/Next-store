import Sidebar from "@/app/admin/Sidebar";
import { Separator } from "@/components/ui/separator";
import type { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <h2 className="text-2lg mb-4 font-bold">Dashboard</h2>
      <Separator />
      <section className="mt-12 grid gap-6 lg:grid-cols-12">
        <div className="px-4 lg:col-span-2">
          <Sidebar />
        </div>
        <div className="lg:col-span-10">{children}</div>
      </section>
    </>
  );
}
