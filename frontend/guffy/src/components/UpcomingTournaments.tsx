import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, MapPinIcon } from "lucide-react"

interface Tournament {
  id: number
  name: string
  date: string
  location: string
  slug: string
}

interface UpcomingTournamentsProps {
  tournaments: Tournament[]
}

export default function UpcomingTournaments({ tournaments }: UpcomingTournamentsProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Upcoming Tournaments</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {tournaments.map((tournament) => (
            <li key={tournament.id} className="border-b pb-4 last:border-b-0">
              <Link
                href={`/tournaments/${tournament.slug}`}
                className="block hover:bg-accent hover:text-accent-foreground p-2 rounded-md transition-colors"
              >
                <h3 className="font-semibold text-lg">{tournament.name}</h3>
                <p className="text-sm text-muted-foreground flex items-center mt-1">
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  {tournament.date}
                </p>
                <p className="text-sm text-muted-foreground flex items-center mt-1">
                  <MapPinIcon className="w-4 h-4 mr-2" />
                  {tournament.location}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

