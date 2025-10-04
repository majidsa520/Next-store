import Sidebar from "@/app/admin/Sidebar";
import { Separator } from "@/components/ui/separator";

export default function DashboardLayout() {
  return (
    <>
      <h2 className="text-2lg mb-4 font-bold">Admin</h2>
      <Separator />
      <section className="mt-12 grid gap-12 lg:grid-cols-12">
        <div className="p-4 lg:col-span-2">
          <Sidebar />
        </div>
        <div className="lg:col-span-10"></div>
      </section>
    </>
  );
}
