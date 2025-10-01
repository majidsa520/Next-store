"use client";
import ProductsGrid from "@/components/products/ProductsGrid";
import ProductsList from "@/components/products/ProductsList";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Product } from "@prisma/client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { LuLayoutGrid, LuLayoutList } from "react-icons/lu";

export default function ProductsContainer({
  products,
}: {
  products: Product[];
}) {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const layout = searchParams.get("layout") || "grid";
  const productsNum = products.length;
  if (productsNum === 0)
    return (
      <section>
        <h4 className="text-2xl">No products found</h4>
      </section>
    );
  return (
    <section className="flex flex-col">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">
          {productsNum} Product{productsNum > 1 ? "s" : ""} Found
        </h3>
        <div className="flex items-center justify-end gap-2">
          <Button
            size="icon"
            variant={layout === "list" ? "default" : "ghost"}
            asChild
          >
            <Link
              href={{
                pathname: "/products",
                query: { layout: "list", ...(search ? { search } : {}) },
              }}
            >
              <LuLayoutList />
            </Link>
          </Button>
          <Button
            size="icon"
            variant={layout === "grid" ? "default" : "ghost"}
            asChild
          >
            <Link
              href={{
                pathname: "/products",
                query: { layout: "grid", ...(search ? { search } : {}) },
              }}
            >
              <LuLayoutGrid />
            </Link>
          </Button>
        </div>
      </div>
      <Separator className="mt-4" />
      {layout === "list" ? (
        <ProductsList products={products} />
      ) : (
        <ProductsGrid products={products} />
      )}
    </section>
  );
}
