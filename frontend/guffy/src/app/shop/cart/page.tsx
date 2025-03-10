import { Nav } from "@/components/NavBar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { CartProvider } from "@/components/CartContext"
import CartItems from "@/components/CartItems"

export default function CartPage() {
  return (
    <CartProvider>
      <Nav />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Your Cart</h1>
        <Card>
          <CardHeader>
            <CardTitle>Cart Items</CardTitle>
          </CardHeader>
          <CardContent>
            <CartItems />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/shop">
              <Button variant="outline">Continue Shopping</Button>
            </Link>
            <Button>Proceed to Checkout</Button>a
          </CardFooter>
        </Card>
      </main>
    </CartProvider>
  )
}

