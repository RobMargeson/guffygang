export type Profile = {
  id: number
  name: string
  handicap: number
  image: string
  bio: string
  badges: string[]
  stats: {
    tournamentsWon: number
    avgRoundTime: string
    homeClub: string
  }
  skills: {
    drivingAccuracy: number
    putting: number
    approachShots: number
    sandSaves: number
  }
  achievements: {
    type: string
    description: string
  }[]
  recentRounds: {
    course: string
    date: string
    score: number
    par: number
    fairwaysHit: string
    greensInRegulation: string
    putts: number
  }[]
  user: string
  rating: number
  comment: string
  date: string
}

const profiles: Profile[] = [
  {
    id: 1,
    name: "John Fairway",
    handicap: 2.5,
    image: "/placeholder.svg?height=300&width=300&text=JF",
    bio: "Former collegiate golfer turned finance professional. Still maintains a competitive edge and plays in regional tournaments on weekends.",
    badges: ["Pro Golfer", "Club Champion", "Long Drive Specialist"],
    stats: {
      tournamentsWon: 8,
      avgRoundTime: "4h 15m",
      homeClub: "Pinehurst Resort",
    },
    skills: {
      drivingAccuracy: 85,
      putting: 92,
      approachShots: 88,
      sandSaves: 78,
    },
    achievements: [
      {
        type: "Tournament",
        description: "1st Place in State Open",
      },
      {
        type: "Personal Best",
        description: "62 at Pebble Beach",
      },
      {
        type: "Milestone",
        description: "100th Career Eagle",
      },
      {
        type: "Recognition",
        description: "Long Drive Contest Winner",
      },
    ],
    recentRounds: [
      {
        course: "Augusta National",
        date: "2025-02-08",
        score: 68,
        par: 72,
        fairwaysHit: "12/14",
        greensInRegulation: "16/18",
        putts: 28,
      },
      {
        course: "St Andrews",
        date: "2025-02-01",
        score: 70,
        par: 72,
        fairwaysHit: "11/14",
        greensInRegulation: "14/18",
        putts: 30,
      },
      {
        course: "Pebble Beach",
        date: "2025-01-25",
        score: 71,
        par: 72,
        fairwaysHit: "10/14",
        greensInRegulation: "13/18",
        putts: 29,
      },
      {
        course: "TPC Sawgrass",
        date: "2025-01-18",
        score: 69,
        par: 72,
        fairwaysHit: "12/14",
        greensInRegulation: "15/18",
        putts: 27,
      },
    ],
    user: "golfpro83",
    rating: 4.9,
    comment: "One of the most consistent players at our club. His short game is exceptional.",
    date: "2025-02-15",
  },
  {
    id: 2,
    name: "Sarah Greenside",
    handicap: 4.8,
    image: "/placeholder.svg?height=300&width=300&text=SG",
    bio: "Rising star on the women's amateur circuit. Known for precision iron play and mental toughness under pressure.",
    badges: ["Amateur Champion", "Iron Play Expert", "Comeback Player"],
    stats: {
      tournamentsWon: 5,
      avgRoundTime: "4h 05m",
      homeClub: "Torrey Pines Golf Course",
    },
    skills: {
      drivingAccuracy: 78,
      putting: 85,
      approachShots: 92,
      sandSaves: 75,
    },
    achievements: [
      {
        type: "Tournament",
        description: "Women's Amateur Champion",
      },
      {
        type: "Personal Best",
        description: "65 at Torrey Pines South",
      },
      {
        type: "Milestone",
        description: "First Albatross",
      },
      {
        type: "Recognition",
        description: "Most Improved Player 2024",
      },
    ],
    recentRounds: [
      {
        course: "Torrey Pines South",
        date: "2025-02-10",
        score: 72,
        par: 72,
        fairwaysHit: "10/14",
        greensInRegulation: "14/18",
        putts: 31,
      },
      {
        course: "Olympic Club",
        date: "2025-02-03",
        score: 74,
        par: 72,
        fairwaysHit: "9/14",
        greensInRegulation: "13/18",
        putts: 32,
      },
      {
        course: "Bethpage Black",
        date: "2025-01-27",
        score: 76,
        par: 71,
        fairwaysHit: "8/14",
        greensInRegulation: "12/18",
        putts: 33,
      },
      {
        course: "Spyglass Hill",
        date: "2025-01-20",
        score: 73,
        par: 72,
        fairwaysHit: "11/14",
        greensInRegulation: "15/18",
        putts: 30,
      },
    ],
    user: "golfcoach42",
    rating: 4.8,
    comment: "Sarah has incredible focus and determination. Her iron play is a thing of beauty.",
    date: "2025-02-12",
  },
  {
    id: 3,
    name: "Michael Bunker",
    handicap: 8.2,
    image: "/placeholder.svg?height=300&width=300&text=MB",
    bio: "Retired surgeon who took up golf seriously in his 50s. Known for his methodical approach and steady improvement year after year.",
    badges: ["Senior Champion", "Most Improved", "Charity Tournament Host"],
    stats: {
      tournamentsWon: 2,
      avgRoundTime: "4h 30m",
      homeClub: "Whistling Straits",
    },
    skills: {
      drivingAccuracy: 70,
      putting: 75,
      approachShots: 68,
      sandSaves: 82,
    },
    achievements: [
      {
        type: "Tournament",
        description: "Senior Club Championship",
      },
      {
        type: "Personal Best",
        description: "75 at Whistling Straits",
      },
      {
        type: "Milestone",
        description: "Reduced Handicap from 18 to 8 in 3 years",
      },
      {
        type: "Recognition",
        description: "Raised $50,000 in Charity Golf Event",
      },
    ],
    recentRounds: [
      {
        course: "Whistling Straits",
        date: "2025-02-12",
        score: 80,
        par: 72,
        fairwaysHit: "9/14",
        greensInRegulation: "10/18",
        putts: 32,
      },
      {
        course: "Erin Hills",
        date: "2025-02-05",
        score: 82,
        par: 72,
        fairwaysHit: "8/14",
        greensInRegulation: "9/18",
        putts: 33,
      },
      {
        course: "Blackwolf Run",
        date: "2025-01-29",
        score: 79,
        par: 72,
        fairwaysHit: "10/14",
        greensInRegulation: "11/18",
        putts: 31,
      },
      {
        course: "Sand Valley",
        date: "2025-01-22",
        score: 81,
        par: 72,
        fairwaysHit: "9/14",
        greensInRegulation: "10/18",
        putts: 32,
      },
    ],
    user: "sandtrap_survivor",
    rating: 4.6,
    comment:
      "Michael's improvement over the past few years has been remarkable. His sand play is now among the best at the club.",
    date: "2025-02-10",
  },
  {
    id: 4,
    name: "Emma Putter",
    handicap: 1.2,
    image: "/placeholder.svg?height=300&width=300&text=EP",
    bio: "Former LPGA tour player now working as a teaching professional. Known for her exceptional short game and course management skills.",
    badges: ["Tour Professional", "Short Game Wizard", "Teaching Pro"],
    stats: {
      tournamentsWon: 12,
      avgRoundTime: "4h 00m",
      homeClub: "Pebble Beach Golf Links",
    },
    skills: {
      drivingAccuracy: 82,
      putting: 95,
      approachShots: 90,
      sandSaves: 88,
    },
    achievements: [
      {
        type: "Tournament",
        description: "LPGA Tour Winner (2x)",
      },
      {
        type: "Personal Best",
        description: "63 at Pebble Beach",
      },
      {
        type: "Milestone",
        description: "Played in 5 Major Championships",
      },
      {
        type: "Recognition",
        description: "Top 10 Teaching Professional 2024",
      },
    ],
    recentRounds: [
      {
        course: "Pebble Beach",
        date: "2025-02-15",
        score: 67,
        par: 72,
        fairwaysHit: "12/14",
        greensInRegulation: "16/18",
        putts: 26,
      },
      {
        course: "Cypress Point",
        date: "2025-02-08",
        score: 69,
        par: 72,
        fairwaysHit: "11/14",
        greensInRegulation: "15/18",
        putts: 28,
      },
      {
        course: "Spyglass Hill",
        date: "2025-02-01",
        score: 70,
        par: 72,
        fairwaysHit: "10/14",
        greensInRegulation: "14/18",
        putts: 29,
      },
      {
        course: "Spanish Bay",
        date: "2025-01-25",
        score: 68,
        par: 72,
        fairwaysHit: "12/14",
        greensInRegulation: "15/18",
        putts: 27,
      },
    ],
    user: "lpga_veteran",
    rating: 5.0,
    comment:
      "Emma's putting clinic changed my game completely. She has an incredible ability to simplify complex concepts.",
    date: "2025-02-18",
  },
  {
    id: 5,
    name: "David Driver",
    handicap: 5.6,
    image: "/placeholder.svg?height=300&width=300&text=DD",
    bio: "Former baseball player who transitioned to golf in his 30s. Known for his incredible distance off the tee and aggressive playing style.",
    badges: ["Long Drive Champion", "Power Player", "Most Birdies"],
    stats: {
      tournamentsWon: 3,
      avgRoundTime: "3h 50m",
      homeClub: "TPC Scottsdale",
    },
    skills: {
      drivingAccuracy: 65,
      putting: 78,
      approachShots: 80,
      sandSaves: 72,
    },
    achievements: [
      {
        type: "Tournament",
        description: "Regional Long Drive Champion",
      },
      {
        type: "Personal Best",
        description: "68 at TPC Scottsdale",
      },
      {
        type: "Milestone",
        description: "First Sub-70 Round",
      },
      {
        type: "Recognition",
        description: "Longest Drive of the Year (345 yards)",
      },
    ],
    recentRounds: [
      {
        course: "TPC Scottsdale",
        date: "2025-02-14",
        score: 75,
        par: 71,
        fairwaysHit: "8/14",
        greensInRegulation: "12/18",
        putts: 31,
      },
      {
        course: "Troon North",
        date: "2025-02-07",
        score: 77,
        par: 72,
        fairwaysHit: "7/14",
        greensInRegulation: "11/18",
        putts: 32,
      },
      {
        course: "We-Ko-Pa",
        date: "2025-01-31",
        score: 74,
        par: 72,
        fairwaysHit: "9/14",
        greensInRegulation: "13/18",
        putts: 30,
      },
      {
        course: "Grayhawk",
        date: "2025-01-24",
        score: 76,
        par: 72,
        fairwaysHit: "8/14",
        greensInRegulation: "12/18",
        putts: 31,
      },
    ],
    user: "big_hitter",
    rating: 4.7,
    comment: "David's driving is a sight to behold. He regularly outdrives everyone by 30+ yards.",
    date: "2025-02-16",
  },
]

export default profiles

