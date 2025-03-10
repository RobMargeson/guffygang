"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function RoundSelector() {
  const [selectedRound, setSelectedRound] = useState(4)
  const rounds = [1, 2, 3, 4]

  return (
    <div className="flex space-x-2 mb-4">
      {rounds.map((round) => (
        <Button
          key={round}
          variant={selectedRound === round ? "default" : "outline"}
          onClick={() => setSelectedRound(round)}
        >
          Round {round}
        </Button>
      ))}
    </div>
  )
}

