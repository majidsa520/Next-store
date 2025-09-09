import Link from "next/link";
import { Button } from "../ui/button";
import { LuShoppingCart } from "react-icons/lu";

export default async function CartButton() {
  const numItemsInCart = 5;
  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="flex items-center justify-center"
    >
      <Link href="/cart" className="relative">
        <LuShoppingCart />
        <span className="bg-primary absolute -top-2.5 -right-2.5 flex size-5 items-center justify-center rounded-full text-xs text-white">
          5
        </span>
      </Link>
    </Button>
  );
}
