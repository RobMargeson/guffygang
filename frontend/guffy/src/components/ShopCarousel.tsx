import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export default function ShopCarousel() {
return (


<Carousel className="flex justify-center items-center">
  <CarouselContent>
  {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card>
                <CardContent className="flex items-center justify-center h-96 p-6">
                  <span className="text-4xl font-semibold ">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

)

}


