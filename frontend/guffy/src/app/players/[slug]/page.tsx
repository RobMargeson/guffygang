import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ClubIcon as GolfIcon, Trophy, Clock, Users, Target } from 'lucide-react';
import { Nav } from "@/components/NavBar";
import { notFound } from "next/navigation";
import profiles from "@/testdata/profiles";

export default async function PlayerProfile({ params }: { params: { slug: string } }) {
  const playerId = Number.parseInt(params.slug);
  const player = await profiles.find((p) => p.id === playerId);

  if (!player) {
    return notFound();
  }

  return (
    <>
      <Nav />
      <div className="min-h-screen">
        <header className="dark:bg-secondary">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-green-800 dark:text-white">Golfer Profile</h1>
            <Button variant="outline">Edit Profile</Button>
          </div>
        </header>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Profile Info */}
              <Card className="md:col-span-2">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                    <Image
                      src={player.image || "/placeholder.svg"}
                      alt={player.name}
                      width={150}
                      height={150}
                      className="rounded-full"
                    />
                    <div className="text-center md:text-left">
                      <h2 className="text-2xl font-bold">{player.name}</h2>
                      <p className="text-muted-foreground">Handicap: {player.handicap}</p>
                      <div className="mt-2 flex flex-wrap justify-center md:justify-start gap-2">
                        {player.badges.map((badge, index) => (
                          <Badge key={index} variant="secondary">
                            {index === 0 && <GolfIcon className="w-4 h-4 mr-1" />}
                            {index === 1 && <Users className="w-4 h-4 mr-1" />}
                            {index === 2 && <Target className="w-4 h-4 mr-1" />}
                            {badge}
                          </Badge>
                        ))}
                      </div>
                      <p className="mt-4 text-sm">{player.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Trophy className="w-5 h-5 mr-2" />
                      <span className="text-muted-foreground">Tournaments Won:</span>
                      <span className="ml-auto font-bold">{player.stats.tournamentsWon}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span className="text-muted-foreground">Avg. Round Time:</span>
                      <span className="ml-auto font-bold">{player.stats.avgRoundTime}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      <span className="text-muted-foreground">Home Club:</span>
                      <span className="ml-auto font-bold">{player.stats.homeClub}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Golf Skills */}
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Golf Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(player.skills).map(([skill, value]) => (
                      <div key={skill}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">
                            {skill.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                          </span>
                          <span className="text-sm font-medium">{value}%</span>
                        </div>
                        <Progress value={value} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Achievements */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {player.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Badge variant="outline">{achievement.type}</Badge>
                        <span>{achievement.description}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Recent Rounds */}
              <Card className="md:col-span-3">
                <CardHeader>
                  <CardTitle>Recent Rounds</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2">Course</th>
                          <th className="text-left py-2">Date</th>
                          <th className="text-left py-2">Score</th>
                          <th className="text-left py-2">Par</th>
                          <th className="text-left py-2">Fairways Hit</th>
                          <th className="text-left py-2">Greens in Regulation</th>
                          <th className="text-left py-2">Putts</th>
                        </tr>
                      </thead>
                      <tbody>
                        {player.recentRounds.map((round, index) => (
                          <tr key={index} className="border-b">
                            <td className="py-2">{round.course}</td>
                            <td className="py-2">{round.date}</td>
                            <td className="py-2 font-bold">{round.score}</td>
                            <td className="py-2">{round.par}</td>
                            <td className="py-2">{round.fairwaysHit}</td>
                            <td className="py-2">{round.greensInRegulation}</td>
                            <td className="py-2">{round.putts}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}