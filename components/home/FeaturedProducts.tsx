import EmptyList from "@/components/global/EmptyList";
import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/products/ProductsGrid";
import { getFeaturedProducts } from "@/lib/actions";

export default async function FeaturedProducts() {
  const products = await getFeaturedProducts();
  if (products.length === 0) return <EmptyList />;
  return (
    <section className="pt-24">
      <SectionTitle>featured products</SectionTitle>
      <ProductsGrid products={products}></ProductsGrid>
    </section>
  );
}
