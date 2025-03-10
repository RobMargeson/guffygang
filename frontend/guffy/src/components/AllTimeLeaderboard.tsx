import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"


const leaderboardData = [
  { rank: 1, name: "Tiger Woods", wins: 82, slug: "john-fairway" },
  { rank: 2, name: "Sam Snead", wins: 82, slug: "john-fairway"},
  { rank: 3, name: "Jack Nicklaus", wins: 73, slug: "john-fairway" },
  { rank: 4, name: "Ben Hogan", wins: 64, slug: "john-fairway" },
  { rank: 5, name: "Arnold Palmer", wins: 62, slug: "john-fairway" },
]

export default function AllTimeLeaderboard() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>All-Time Leaderboard</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Rank</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">Wins</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaderboardData.map((player) => (
              <TableRow key={player.rank} className="cursor-pointer hover:bg-muted/50">
                <TableCell className="font-medium">{player.rank}</TableCell>
                <TableCell>
                  <Link href={`/profile/${player.slug}`} className="block w-full">
                    {player.name}
                  </Link>
                </TableCell>
                <TableCell className="text-right">{player.wins}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

