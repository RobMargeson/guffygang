import { Button } from "@/components/ui/button";
import { Nav } from "@/components/NavBar";
import Link from "next/link";
import DaySwitch from "@/components/DaySwitch";

const BasePage = () => {
  return (
    <main className="scroll-smooth">
      <Nav />
      <section className="max-w-screen-xl mx-auto py-24 flex flex-col gap-8 items-center text-center justify-center">
        <h1 className="text-8xl font-bold">GUFFY GANG</h1>
        <p className="text-2xl text-muted-foreground">...GUFF THE FUCK UP!</p>
        <div className="flex gap-6 py-6">
          <Link href="/schedule">
            <Button>Schedule</Button>
          </Link>
          <Link href="/signup">
            <Button variant="ghost">Learn More</Button>
          </Link>
        </div>
      </section>

      <div className="h-48 w-auto bg-black opacity-90 dark:invert"></div>

      <h1 id="aboutUs" className="flex justify-center text-4xl font-semibold pt-28">About Guffy Gang</h1>
      <section className="flex flex-col gap-8 pt-2 items-center text-center justify-center">
        <p className="text-base flex justify-center w-1/2 text-lg">
          Pulling off heists so flawlessly even Lester takes notes. Wealth, power, and chaos? All in a day’s work. Off the streets and onto the greens, proving that precision and perfection are second nature. Robbing banks and sinking birdies, we do it all with style, swagger, and an unshakable belief in our greatness. Praise the sun! 🌞
        </p>
        
        <DaySwitch />
      </section>
    </main>
  );
};

export default BasePage