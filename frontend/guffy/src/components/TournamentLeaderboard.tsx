import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Player {
  position: number
  name: string
  slug: string
  country: string
  score: number
  today: number
}

interface TournamentLeaderboardProps {
  players: Player[]
}

export default function TournamentLeaderboard({ players }: TournamentLeaderboardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Leaderboard</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">Pos</TableHead>
              <TableHead>Player</TableHead>
              <TableHead>Country</TableHead>
              <TableHead className="text-right">Score</TableHead>
              <TableHead className="text-right">Today</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {players.map((player) => (
              <TableRow key={player.position}>
                <TableCell className="font-medium">{player.position}</TableCell>
                <TableCell>
                  <Link href={`/profile/${player.slug}`} className="hover:underline">
                    {player.name}
                  </Link>
                </TableCell>
                <TableCell>{player.country}</TableCell>
                <TableCell className="text-right">{player.score}</TableCell>
                <TableCell className="text-right">{player.today}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

