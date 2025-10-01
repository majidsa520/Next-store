import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingContainer() {
  return (
    <ul className="grid gap-12 pt-12 sm:grid-cols-2 md:grid-cols-3">
      <ProductLoader />
      <ProductLoader />
      <ProductLoader />
    </ul>
  );
}
function ProductLoader() {
  return (
    <li>
      <Card className="transition-shadow duration-300 group-hover:shadow-xl">
        <CardContent className="flex flex-col gap-2 p-4">
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </CardContent>
      </Card>
    </li>
  );
}
