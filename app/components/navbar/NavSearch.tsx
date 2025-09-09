import { Input } from "@/app/components/ui/input";

export default function NavSearch() {
  return (
    <div>
      <Input
        type="search"
        placeholder="search product..."
        className="dark:bg-muted"
      />
    </div>
  );
}
