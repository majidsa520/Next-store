import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/utils/format";
import type { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
export default function ProductBox({ product }: { product: Product }) {
  const { id: productId, name, price, image } = product;
  return (
    <li className="">
      <article className="group relative">
        <Link href={`/products/${productId}`}>
          <Card className="transition-shadow duration-300 group-hover:shadow-xl">
            <CardContent className="p-4">
              <div className="relative h-64 overflow-hidden rounded md:h-48">
                <Image
                  src={image}
                  alt={name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  className="w-full rounded object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="mt-4 text-center">
                <h2 className="text-lg">{name}</h2>
                <p className="text-muted-foreground">{formatCurrency(price)}</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <div className="zoom-in-5 absolute top-7 right-7">
          <FavoriteToggleButton productId={productId} />
        </div>
      </article>
    </li>
  );
}
