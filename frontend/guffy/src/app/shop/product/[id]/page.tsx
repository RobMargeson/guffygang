import { Nav } from "@/components/NavBar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { notFound } from "next/navigation"
import products from "@/testdata/products"


export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number.parseInt(params.id))

  if (!product) {
    notFound()
  }

  return (
    <>
      <Nav />
      <main className="container mx-auto px-4 py-8">
        <Card className="flex flex-col md:flex-row">
          <CardContent className="md:w-1/2">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              width={400}
              height={400}
              className="w-full h-auto object-cover rounded-md"
            />
          </CardContent>
          <div className="md:w-1/2 flex flex-col">
            <CardHeader>
              <CardTitle className="text-3xl">{product.title}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">{product.details}</p>
              <p className="text-3xl font-bold mb-4">${product.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter>
            </CardFooter>
          </div>
        </Card>
      </main>
    </>
  )
}

