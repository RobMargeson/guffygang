import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import EldenRing from "@/images/eldenring.png"
import LSGC from "@/images/lossantosgc.png"

const shopImages = [
EldenRing,
LSGC,

];

export default function ShopCarousel() {
  return (
    <Carousel className="flex justify-center items-center">
      <CarouselPrevious />
      <CarouselContent>
        {shopImages.map((src, index) => (
          <CarouselItem key={index}>
            <div className="p-4">
              <Card>
                <CardContent className="flex items-center justify-center h-96 p-6">
                <Image src={src} alt={`Image ${index + 1}`} className="object-contain h-96 w-auto" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  );
}