import { Nav } from "@/components/NavBar";
import ShopCarousel from "@/components/ShopCarousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function shop() {
  return (
    <>
      <Nav />
      <main className="flex flex-col items-center justify-center">
        <h2>Guff Wear</h2>
        <ShopCarousel />

        <Card className="">
            <div className="flex">
            <CardContent className="flex justify-center">
            <Image
            src=""
            alt="#"
            className="w-auto"
            />
          </CardContent>
          <CardHeader>
            <CardTitle>title</CardTitle>
            <CardDescription>description</CardDescription>
          </CardHeader>

            </div>
        <div className="flex justify-center">
        <Button className="w-5/6 m-2">Buy Now</Button>

        </div>
        </Card>
      </main>
    </>
  );
}
