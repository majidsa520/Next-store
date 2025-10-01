import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import image1 from "@/public/images/caro-1.jpg";
import image2 from "@/public/images/caro-2.jpg";
import image3 from "@/public/images/caro-3.jpg";
import image4 from "@/public/images/caro-4.jpg";
import image5 from "@/public/images/caro-5.jpg";
import Image from "next/image";
const images = [image1, image2, image3, image4, image5];

export default function HeroCarousel() {
  return (
    <div className="hidden lg:block">
      <Carousel className="rounded-xl">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="">
              <Card>
                <CardContent className="h-full overflow-hidden p-0">
                  <Image
                    src={image}
                    alt="hero image"
                    // sizes="(max-width: 768px) 100vw, 50vw"
                    className="block h-[24rem] w-full rounded-xl object-cover"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </div>
  );
}
