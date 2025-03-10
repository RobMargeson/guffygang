import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, MapPinIcon, TrophyIcon } from "lucide-react"

export default function TournamentDetails() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tournament Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center">
          <CalendarIcon className="w-5 h-5 mr-2" />
          <span>April 11-14, 2024</span>
        </div>
        <div className="flex items-center">
          <MapPinIcon className="w-5 h-5 mr-2" />
          <span>Augusta National Golf Club, Augusta, Georgia</span>
        </div>
        <div className="flex items-center">
          <TrophyIcon className="w-5 h-5 mr-2" />
          <span>Prize Pool: $11,500,000</span>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Course Details</h3>
          <p className="text-sm text-muted-foreground">
            Par 72 | 7,475 yards
            <br />
            Designed by Alister MacKenzie and Bobby Jones
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

