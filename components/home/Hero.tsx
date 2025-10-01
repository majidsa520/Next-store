import HeroCarousel from "@/components/home/HeroCarousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 items-center gap-24 lg:grid-cols-2">
      <div className="">
        <h2 className="max-w-2xl text-4xl leading-16 font-bold tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h2>
        <p className="text-muted-foreground mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quo
          numquam fugit inventore sint modi veritatis tempora laborum a rerum
          itaque beatae ipsa corporis dolorem, illum error aperiam reprehenderit
          facilis?
        </p>
        <Button asChild size="lg" className="mt-8 leading-[100%]">
          <Link href="/products">Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}
