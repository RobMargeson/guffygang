import { notFound } from "next/navigation"
import TournamentLeaderboard from "@/components/TournamentLeaderboard"
import TournamentDetails from "@/components/TournamentDetails"
import RoundSelector from "@/components/RoundSelector"

// This would typically come from an API or database
const tournaments = [
    { slug: "masters-2024", name: "The Masters 2024" },
    { slug: "pga-championship-2024", name: "PGA Championship 2024" },
    { slug: "us-open-2024", name: "U.S. Open 2024" },
    { slug: "open-championship-2024", name: "The Open Championship 2024" },
  ]
  
  const leaderboardData = [
    { position: 1, name: "Rory McIlroy", slug: "rory-mcilroy", country: "NIR", score: -12, today: -4 },
    { position: 2, name: "Jon Rahm", slug: "jon-rahm", country: "ESP", score: -10, today: -2 },
    { position: 3, name: "Scottie Scheffler", slug: "scottie-scheffler", country: "USA", score: -9, today: -3 },
    { position: 4, name: "Brooks Koepka", slug: "brooks-koepka", country: "USA", score: -8, today: -1 },
    { position: 5, name: "Justin Thomas", slug: "justin-thomas", country: "USA", score: -7, today: -2 },
  ]
  
  export default function TournamentPage({ params }: { params: { slug: string } }) {
    const tournament = tournaments.find((t) => t.slug === params.slug)
  
    if (!tournament) {
      notFound()
    }
  
    return (
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">{tournament.name}</h1>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <RoundSelector />
            <TournamentLeaderboard players={leaderboardData} />
          </div>
          <div>
            <TournamentDetails />
          </div>
        </div>
      </main>
    )
  }

