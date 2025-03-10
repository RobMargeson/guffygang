"use client"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

const highlights = [
  { id: 1, title: "Masters 2023", image: "/placeholder.svg?height=400&width=600" },
  { id: 2, title: "US Open 2023", image: "/placeholder.svg?height=400&width=600" },
  { id: 3, title: "The Open Championship 2023", image: "/placeholder.svg?height=400&width=600" },
]

export default function TournamentCarousel() {
  return (
    <Carousel className="w-full max-w-4xl mx-auto">
      <CarouselContent>
        {highlights.map((highlight) => (
          <CarouselItem key={highlight.id}>
            <Card>
              <CardContent className="flex aspect-video items-center justify-center p-6">
                <div className="relative w-full h-full">
                  <Image
                    src={highlight.image || "/placeholder.svg"}
                    alt={highlight.title}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                    <h2 className="text-xl font-bold">{highlight.title}</h2>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

