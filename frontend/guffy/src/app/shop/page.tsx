import { Nav } from "@/components/NavBar"
import ShopCarousel from "@/components/ShopCarousel"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import products from "@/testdata/products"


export default function Shop() {
  return (
    <>
      <Nav />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Guff Wear</h1>
        <ShopCarousel />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {products.map((product) => (
            <Card key={product.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{product.title}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  width={200}
                  height={200}
                  className="w-full h-auto object-cover rounded-md"
                />
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                <Link href={`/shop/product/${product.id}`}>
                  <Button>View Product</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </>
  )
}
