import { Button } from "@/components/ui/button";
import { Nav } from "@/components/NavBar";
import Link from "next/link"

export default function Home() {
  return (
<main>
      <Nav />
      <section className="max-w-screen-xl mx-auto py-24 flex flex-col gap-8 items-center text-center justify-center">
        <h1 className="text-8xl font-bold">GUFFY GANG</h1>
        <p className="text-2xl text-muted-foreground">...GUFF THE FUCK UP!</p>
        <div className="flex gap-6 py-6">
          <Link href={"/schedule"}>
            <Button>Schedule</Button>
          </Link>
          <Link href={"/signup"}>
            <Button variant={"ghost"}>Learn More</Button>
          </Link>
        </div>
      </section>
    </main>
    
  );
}
