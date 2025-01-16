import { Nav } from "@/components/NavBar"

export default function about() {
    return (
        <>
                <Nav />
        <main>
            <section className="flex flex-col gap-8 py-24 items-center text-center justify-center">
            <h1 className=" text-4xl flex justify-center">About us</h1>
            <p className="text-base flex justify-center w-1/2">Pulling off heists so flawlessly even Lester takes notes. Wealth, power, and chaos? All in a day’s work. Off the streets and onto the greens, proving that precision and perfection are second nature. Robbing banks and sinking birdies, we do it all with style, swagger, and an unshakable belief in our greatness. Praise the sun! 🌞</p>
            </section>
            
        </main>
        </>

    )
}