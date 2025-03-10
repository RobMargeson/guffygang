import TournamentCarousel from "@/components/TournamentCarousel"
import AllTimeLeaderboard from "@/components/AllTimeLeaderboard"
import UpcomingTournaments from "@/components/UpcomingTournaments"
import { Nav } from "@/components/NavBar"

const upcomingTournaments = [
    { id: 1, name: "The Masters", date: "April 11-14, 2024", location: "Augusta, Georgia", slug: "masters-2024" },
    {
      id: 2,
      name: "PGA Championship",
      date: "May 16-19, 2024",
      location: "Louisville, Kentucky",
      slug: "pga-championship-2024",
    },
    { id: 3, name: "U.S. Open", date: "June 13-16, 2024", location: "Pinehurst, North Carolina", slug: "us-open-2024" },
    {
      id: 4,
      name: "The Open Championship",
      date: "July 18-21, 2024",
      location: "Royal Troon, Scotland",
      slug: "open-championship-2024",
    },
  ]
  
  export default function TournamentPage() {
    return (
      <>
      <Nav />
            <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Golf Tournaments</h1>
        <TournamentCarousel />
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <AllTimeLeaderboard />
          <UpcomingTournaments tournaments={upcomingTournaments} />
        </div>
      </main>
      </>

    )
  }
  
  