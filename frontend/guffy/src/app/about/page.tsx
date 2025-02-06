import { Nav } from "@/components/NavBar"
import Link from "next/link"

export default function about() {
    return (
        <>
                <Nav />
        <main>
        <div className="grid grid-cols-4 text-center pr-36 pl-36 pt-36 border-white-900">
    
          <Link href="/details1" className="p-4 hover:bg-secondary">
            <div className="text-5xl font-bold">~$250 Mill</div>
            <div className="text-3xl text-primary">Relocated Assets</div>
          </Link>
          <Link href="/details2" className=" p-4 hover:bg-secondary border-inherit border-l">
            <div className="text-5xl font-bold ">99%</div>
            <div className="text-3xl text-primary">Crime Success Rate</div>
          </Link>
          <Link href="/details3" className="p-4 hover:bg-secondary border-inherit border-r border-l">
            <div className="text-5xl font-bold">15+</div>
            <div className="text-3xl text-primary">Guffy Degenerates</div>
          </Link>
          <Link href="/details4" className="p-4 hover:bg-secondary">
            <div className="text-5xl font-bold">∞</div>
            <div className="text-3xl text-primary">Suns Praised</div>
          </Link>
          <Link href="/details5" className="p-4 hover:bg-secondary border-inherit border-t">
            <div className="text-5xl font-bold">2018</div>
            <div className="text-3xl text-primary">GuffyGang Began</div>
          </Link>
          <Link href="/details6" className="p-4 hover:bg-secondary border-inherit border-l border-t">
            <div className="text-5xl font-bold">350+</div>
            <div className="text-3xl text-primary">Wednesdays</div>
          </Link>
          <Link href="/details7" className=" hover:bg-secondary p-4 bg-gradient-to-r from-purple-700 via-purple-500 to-gray-300 border-inherit border-t border-l border-r">
            <div className="text-5xl font-bold">6</div>
            <div className="text-3xl text-primary">Time Zones</div>
          </Link>
          <Link href="/details8" className="p-4 hover:bg-secondary border-inherit border-t">
            <div className="text-5xl font-bold">100km+</div>
            <div className="text-3xl text-primary">Shredded</div>
          </Link>
        </div>

        





            <section className="flex flex-col gap-8 py-24 items-center text-center justify-center">
            <h1 className=" text-4xl flex justify-center">About us</h1>
            <p className="text-3xl flex justify-center w-1/2">Pulling off heists so flawlessly even Lester takes notes. Wealth, power, and chaos? All in a day’s work. Off the streets and onto the greens, proving that precision and perfection are second nature. Robbing banks and sinking birdies, we do it all with style, swagger, and an unshakable belief in our greatness. Praise it! 🌞</p>
            </section>
            


            
           
        </main>
        </>

    )
}