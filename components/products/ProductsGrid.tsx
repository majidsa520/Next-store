import ProductBox from "@/components/products/ProductBox";
import type { Product } from "@prisma/client";

export default function ProductsGrid({ products }: { products: Product[] }) {
  return (
    <ul className="grid gap-12 pt-12 sm:grid-cols-2 md:grid-cols-3">
      {products.map((product) => (
        <ProductBox product={product} key={product.id} />
      ))}
    </ul>
  );
}
