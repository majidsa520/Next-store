import AddToCart from "@/components/product/AddToCart";
import ProductBreadCrumb from "@/components/product/ProductBreadCrumb";
import ProductRating from "@/components/product/ProductRating";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import { getSingleProduct } from "@/lib/actions";
import db from "@/lib/db";
import { formatCurrency } from "@/utils/format";
import Image from "next/image";
export default async function SingleProductPage({
  params,
}: {
  params: { id: number };
}) {
  const { id: productId } = await params;
  const product = await getSingleProduct(productId);
  const { name, description, company, price, image } = product;
  const dollarsAmount = formatCurrency(price);
  return (
    <section className="">
      <ProductBreadCrumb name={name} />
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-8">
        {/* Left Section */}
        <div className="relative h-full">
          <Image
            src={image}
            alt={name}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px), 33vw"
            className="w-full rounded-md object-cover"
            fill
          />
        </div>
        {/* Right Section */}
        <div className="">
          <div className="flex gap-4">
            <h1 className="text-3xl font-bold capitalize">{name}</h1>
            <FavoriteToggleButton productId={productId} />
          </div>
          <ProductRating productId={productId} />
          <h4 className="mt-2 text-xl">{company}</h4>
          <p className="bg-muted mt-2 inline-block rounded px-4 py-2">
            {dollarsAmount}
          </p>
          <p className="text-muted-foreground mt-6 leading-8">{description}</p>
          <AddToCart productId={productId} />
        </div>
      </div>
    </section>
  );
}
