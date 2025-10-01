import ProductsContainer from "@/components/products/ProductsContainer";
import { getAllProducts } from "@/lib/actions";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const { search } = await searchParams; //search params is an async api in next.js 15+ so it needs "await"
  const products = await getAllProducts({ ...(search ? { search } : {}) });
  return <ProductsContainer products={products} />;
}
