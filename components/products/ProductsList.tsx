import ProductsItem from "@/components/products/ProductsItem";
import type { Product } from "@prisma/client";
export default function ProductsList({ products }: { products: Product[] }) {
  return (
    <ul className="flex flex-col gap-6 pt-12">
      {products.map((product) => (
        <ProductsItem key={product.id} product={product} />
      ))}
    </ul>
  );
}
