"use client"

import { Nav } from "@/components/NavBar"
import Schedule from "@/components/Calendar"

export default function schedule() {
    return (
        <>
                <Nav />
        <main>
            <div className="flex justify-center">

            <Schedule />

            </div>
        </main>
        </>

    )
}