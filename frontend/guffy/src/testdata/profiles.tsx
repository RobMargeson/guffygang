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
  {
    id: 6,
    name: "Robert Wedge",
    handicap: 3.8,
    image: "/placeholder.svg?height=300&width=300&text=RW",
    bio: "Lifelong golfer with a passion for course architecture. Known for his creative shot-making and exceptional wedge play.",
    badges: ["Shot Making Artist", "Wedge Master", "Course Record Holder"],
    stats: {
      tournamentsWon: 6,
      avgRoundTime: "4h 10m",
      homeClub: "Bandon Dunes Golf Resort",
    },
    skills: {
      drivingAccuracy: 75,
      putting: 82,
      approachShots: 90,
      sandSaves: 85,
    },
    achievements: [
      {
        type: "Tournament",
        description: "Mid-Amateur Regional Champion",
      },
      {
        type: "Personal Best",
        description: "66 at Bandon Dunes",
      },
      {
        type: "Milestone",
        description: "Played Top 100 Golf Courses",
      },
      {
        type: "Recognition",
        description: "Course Record at Local Club",
      },
    ],
    recentRounds: [
      {
        course: "Bandon Dunes",
        date: "2025-02-16",
        score: 72,
        par: 72,
        fairwaysHit: "10/14",
        greensInRegulation: "14/18",
        putts: 30,
      },
      {
        course: "Pacific Dunes",
        date: "2025-02-09",
        score: 74,
        par: 71,
        fairwaysHit: "9/14",
        greensInRegulation: "13/18",
        putts: 31,
      },
      {
        course: "Bandon Trails",
        date: "2025-02-02",
        score: 73,
        par: 71,
        fairwaysHit: "11/14",
        greensInRegulation: "14/18",
        putts: 29,
      },
      {
        course: "Old Macdonald",
        date: "2025-01-26",
        score: 75,
        par: 72,
        fairwaysHit: "10/14",
        greensInRegulation: "13/18",
        putts: 31,
      },
    ],
    user: "links_lover",
    rating: 4.8,
    comment: "Robert's creativity around the greens is unmatched. He can get up and down from anywhere.",
    date: "2025-02-17",
  },
  {
    id: 7,
    name: "Jennifer Birdie",
    handicap: 6.3,
    image: "/placeholder.svg?height=300&width=300&text=JB",
    bio: "Marketing executive who balances a busy career with competitive golf. Known for her consistent play and mental toughness.",
    badges: ["Business League Champion", "Consistent Player", "Charity Event Organizer"],
    stats: {
      tournamentsWon: 4,
      avgRoundTime: "4h 20m",
      homeClub: "Bethpage State Park",
    },
    skills: {
      drivingAccuracy: 80,
      putting: 83,
      approachShots: 75,
      sandSaves: 70,
    },
    achievements: [
      {
        type: "Tournament",
        description: "Corporate Challenge Champion",
      },
      {
        type: "Personal Best",
        description: "74 at Bethpage Black",
      },
      {
        type: "Milestone",
        description: "First Hole-in-One",
      },
      {
        type: "Recognition",
        description: "Women's Club Champion",
      },
    ],
    recentRounds: [
      {
        course: "Bethpage Black",
        date: "2025-02-17",
        score: 78,
        par: 71,
        fairwaysHit: "10/14",
        greensInRegulation: "12/18",
        putts: 32,
      },
      {
        course: "Bethpage Red",
        date: "2025-02-10",
        score: 76,
        par: 70,
        fairwaysHit: "11/14",
        greensInRegulation: "13/18",
        putts: 30,
      },
      {
        course: "Montauk Downs",
        date: "2025-02-03",
        score: 79,
        par: 72,
        fairwaysHit: "9/14",
        greensInRegulation: "11/18",
        putts: 33,
      },
      {
        course: "Shinnecock Hills",
        date: "2025-01-27",
        score: 80,
        par: 70,
        fairwaysHit: "10/14",
        greensInRegulation: "12/18",
        putts: 32,
      },
    ],
    user: "weekend_warrior",
    rating: 4.7,
    comment:
      "Jennifer's ability to balance her career and golf is impressive. She's incredibly consistent under pressure.",
    date: "2025-02-18",
  },
  {
    id: 8,
    name: "Thomas Albatross",
    handicap: 0.8,
    image: "/placeholder.svg?height=300&width=300&text=TA",
    bio: "College golf coach and former tour player. Known for his analytical approach to the game and exceptional course management.",
    badges: ["Tour Veteran", "Golf Instructor", "Course Strategist"],
    stats: {
      tournamentsWon: 15,
      avgRoundTime: "3h 55m",
      homeClub: "Pinehurst Resort",
    },
    skills: {
      drivingAccuracy: 88,
      putting: 90,
      approachShots: 92,
      sandSaves: 85,
    },
    achievements: [
      {
        type: "Tournament",
        description: "Mini Tour Winner (3x)",
      },
      {
        type: "Personal Best",
        description: "64 at Pinehurst No. 2",
      },
      {
        type: "Milestone",
        description: "Competed in U.S. Open",
      },
      {
        type: "Recognition",
        description: "Coach of the Year 2024",
      },
    ],
    recentRounds: [
      {
        course: "Pinehurst No. 2",
        date: "2025-02-18",
        score: 68,
        par: 70,
        fairwaysHit: "12/14",
        greensInRegulation: "16/18",
        putts: 27,
      },
      {
        course: "Pinehurst No. 4",
        date: "2025-02-11",
        score: 69,
        par: 70,
        fairwaysHit: "11/14",
        greensInRegulation: "15/18",
        putts: 28,
      },
      {
        course: "Tobacco Road",
        date: "2025-02-04",
        score: 70,
        par: 71,
        fairwaysHit: "10/14",
        greensInRegulation: "14/18",
        putts: 29,
      },
      {
        course: "Mid Pines",
        date: "2025-01-28",
        score: 67,
        par: 72,
        fairwaysHit: "12/14",
        greensInRegulation: "16/18",
        putts: 26,
      },
    ],
    user: "golf_professor",
    rating: 4.9,
    comment:
      "Thomas's approach to course management is brilliant. His students consistently improve their strategic thinking.",
    date: "2025-02-19",
  },
  {
    id: 9,
    name: "Patricia Eagle",
    handicap: 12.5,
    image: "/placeholder.svg?height=300&width=300&text=PE",
    bio: "Retired teacher who took up golf in her 60s. Known for her enthusiasm, determination, and rapid improvement.",
    badges: ["Senior Division Winner", "Most Improved", "Volunteer Coach"],
    stats: {
      tournamentsWon: 1,
      avgRoundTime: "4h 40m",
      homeClub: "Harbour Town Golf Links",
    },
    skills: {
      drivingAccuracy: 65,
      putting: 72,
      approachShots: 60,
      sandSaves: 55,
    },
    achievements: [
      {
        type: "Tournament",
        description: "Senior Ladies Club Championship",
      },
      {
        type: "Personal Best",
        description: "85 at Harbour Town",
      },
      {
        type: "Milestone",
        description: "First Eagle",
      },
      {
        type: "Recognition",
        description: "Most Improved Player 2024",
      },
    ],
    recentRounds: [
      {
        course: "Harbour Town",
        date: "2025-02-15",
        score: 87,
        par: 71,
        fairwaysHit: "8/14",
        greensInRegulation: "7/18",
        putts: 34,
      },
      {
        course: "Sea Pines",
        date: "2025-02-08",
        score: 89,
        par: 72,
        fairwaysHit: "7/14",
        greensInRegulation: "6/18",
        putts: 35,
      },
      {
        course: "Palmetto Dunes",
        date: "2025-02-01",
        score: 86,
        par: 72,
        fairwaysHit: "9/14",
        greensInRegulation: "8/18",
        putts: 33,
      },
      {
        course: "Oyster Reef",
        date: "2025-01-25",
        score: 88,
        par: 72,
        fairwaysHit: "8/14",
        greensInRegulation: "7/18",
        putts: 34,
      },
    ],
    user: "never_too_late",
    rating: 4.6,
    comment: "Patricia's enthusiasm for the game is contagious. She's improved dramatically in just a few years.",
    date: "2025-02-16",
  },
  {
    id: 10,
    name: "Carlos Chip",
    handicap: 7.4,
    image: "/placeholder.svg?height=300&width=300&text=CC",
    bio: "Restaurant owner and passionate golfer. Known for his creative short game and ability to escape trouble.",
    badges: ["Short Game Specialist", "Scrambling Expert", "Club Tournament Finalist"],
    stats: {
      tournamentsWon: 2,
      avgRoundTime: "4h 25m",
      homeClub: "TPC Sawgrass",
    },
    skills: {
      drivingAccuracy: 68,
      putting: 80,
      approachShots: 75,
      sandSaves: 90,
    },
    achievements: [
      {
        type: "Tournament",
        description: "Club Championship Runner-up",
      },
      {
        type: "Personal Best",
        description: "73 at TPC Sawgrass",
      },
      {
        type: "Milestone",
        description: "Chip-in Eagle on 16th at Sawgrass",
      },
      {
        type: "Recognition",
        description: "Best Short Game Award",
      },
    ],
    recentRounds: [
      {
        course: "TPC Sawgrass",
        date: "2025-02-16",
        score: 78,
        par: 72,
        fairwaysHit: "8/14",
        greensInRegulation: "10/18",
        putts: 29,
      },
      {
        course: "Dye's Valley Course",
        date: "2025-02-09",
        score: 80,
        par: 72,
        fairwaysHit: "7/14",
        greensInRegulation: "9/18",
        putts: 30,
      },
      {
        course: "World Golf Village",
        date: "2025-02-02",
        score: 77,
        par: 72,
        fairwaysHit: "9/14",
        greensInRegulation: "11/18",
        putts: 28,
      },
      {
        course: "Atlantic Beach CC",
        date: "2025-01-26",
        score: 79,
        par: 71,
        fairwaysHit: "8/14",
        greensInRegulation: "10/18",
        putts: 29,
      },
    ],
    user: "chip_master",
    rating: 4.7,
    comment: "Carlos can get up and down from anywhere. His creativity around the greens is something to behold.",
    date: "2025-02-17",
  },
  {
    id: 11,
    name: "Olivia Ace",
    handicap: 10.2,
    image: "/placeholder.svg?height=300&width=300&text=OA",
    bio: "Software engineer who picked up golf during the pandemic. Known for her methodical approach and rapid improvement.",
    badges: ["Tech League Champion", "Hole-in-One Club", "Digital Scorekeeper"],
    stats: {
      tournamentsWon: 1,
      avgRoundTime: "4h 15m",
      homeClub: "Chambers Bay",
    },
    skills: {
      drivingAccuracy: 72,
      putting: 75,
      approachShots: 68,
      sandSaves: 60,
    },
    achievements: [
      {
        type: "Tournament",
        description: "Tech Industry Golf Challenge Winner",
      },
      {
        type: "Personal Best",
        description: "82 at Chambers Bay",
      },
      {
        type: "Milestone",
        description: "Hole-in-One on 9th at Chambers Bay",
      },
      {
        type: "Recognition",
        description: "Most Dedicated New Golfer Award",
      },
    ],
    recentRounds: [
      {
        course: "Chambers Bay",
        date: "2025-02-17",
        score: 84,
        par: 72,
        fairwaysHit: "9/14",
        greensInRegulation: "9/18",
        putts: 33,
      },
      {
        course: "Gold Mountain",
        date: "2025-02-10",
        score: 86,
        par: 72,
        fairwaysHit: "8/14",
        greensInRegulation: "8/18",
        putts: 34,
      },
      {
        course: "Newcastle",
        date: "2025-02-03",
        score: 83,
        par: 72,
        fairwaysHit: "10/14",
        greensInRegulation: "10/18",
        putts: 32,
      },
      {
        course: "Salish Cliffs",
        date: "2025-01-27",
        score: 85,
        par: 72,
        fairwaysHit: "9/14",
        greensInRegulation: "9/18",
        putts: 33,
      },
    ],
    user: "tech_golfer",
    rating: 4.5,
    comment:
      "Olivia's analytical approach to learning golf is impressive. She uses data to improve every aspect of her game.",
    date: "2025-02-18",
  },
  {
    id: 12,
    name: "William Bogey",
    handicap: 18.5,
    image: "/placeholder.svg?height=300&width=300&text=WB",
    bio: "Retired firefighter who plays golf for fun and camaraderie. Known for his positive attitude regardless of score.",
    badges: ["Most Enthusiastic", "Charity Tournament Organizer", "Local Legend"],
    stats: {
      tournamentsWon: 0,
      avgRoundTime: "4h 45m",
      homeClub: "Bethpage State Park",
    },
    skills: {
      drivingAccuracy: 55,
      putting: 60,
      approachShots: 50,
      sandSaves: 45,
    },
    achievements: [
      {
        type: "Tournament",
        description: "Firefighters' Charity Tournament Organizer",
      },
      {
        type: "Personal Best",
        description: "89 at Bethpage Green",
      },
      {
        type: "Milestone",
        description: "1000th Round of Golf",
      },
      {
        type: "Recognition",
        description: "Raised $100,000 for Firefighters' Charity",
      },
    ],
    recentRounds: [
      {
        course: "Bethpage Green",
        date: "2025-02-18",
        score: 92,
        par: 72,
        fairwaysHit: "6/14",
        greensInRegulation: "5/18",
        putts: 36,
      },
      {
        course: "Bethpage Yellow",
        date: "2025-02-11",
        score: 94,
        par: 71,
        fairwaysHit: "5/14",
        greensInRegulation: "4/18",
        putts: 37,
      },
      {
        course: "Eisenhower Park",
        date: "2025-02-04",
        score: 91,
        par: 72,
        fairwaysHit: "7/14",
        greensInRegulation: "6/18",
        putts: 35,
      },
      {
        course: "Lido Golf Club",
        date: "2025-01-28",
        score: 93,
        par: 72,
        fairwaysHit: "6/14",
        greensInRegulation: "5/18",
        putts: 36,
      },
    ],
    user: "happy_hacker",
    rating: 4.8,
    comment: "William brings joy to every round. His positive attitude makes him everyone's favorite playing partner.",
    date: "2025-02-19",
  },
]

export default profiles

