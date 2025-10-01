import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/utils/format";
import type { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
export default function ProductsItem({ product }: { product: Product }) {
  const { id: productId, name, image, description, price } = product;
  return (
    <li className="relative flex w-full items-center justify-between">
      <Link href={`/product/${productId}`} className="w-full">
        <Card className="w-full p-4">
          <CardContent className="flex items-center justify-between gap-6 p-0">
            <div className="relative size-36">
              <Image
                src={image}
                fill
                className="h-full w-full object-cover"
                alt={name}
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 self-start">
              <h2 className="text-xl font-bold">{name}</h2>
              <p className="text-stone-500 dark:text-stone-400">
                {description}
              </p>
            </div>
            <div className="flex flex-col items-end justify-between self-stretch">
              <h4 className="">{formatCurrency(price)}</h4>
              <FavoriteToggleButton productId={productId} />
            </div>
          </CardContent>
        </Card>
      </Link>
      {/* <div className="absolute right-6 bottom-2">
        <FavoriteToggleButton productId={productId} />
      </div> */}
    </li>
  );
}
