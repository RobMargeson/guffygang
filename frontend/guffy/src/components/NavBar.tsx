"use client"
import { cn } from "@/lib/utils"
import * as React from "react"
import { ModeToggle } from "./togglemode";
import guffyLogo from "@/images/guffylogo1.png"
import GTAV from "@/images/gtav.png"
import EldenRing from "@/images/eldenring.png"
import Vermintide2 from "@/images/vermintide2.png"
import RocketLeague from "@/images/rocketleague.png"
import Days from "@/images/7days.png"
import LSGC from "@/images/lossantosgc.png"


import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image";

const games: { title: string; href: string; logo: React.ReactNode }[] = [
  {
    title: "GTA V",
    href: "/gtav",
    logo:
    <Image src={GTAV} alt="GTA V" className="h-24 w-fill pt-4 invert dark:invert-0" />,

  },
  {
    title: "Hover Card",
    href: "/eldenring",
    logo:
      <Image src={EldenRing} alt="Elden Ring" className="h-24 w-fill pt-4" />,
  },
  {
    title: "Progress",
    href: "/rats",
    logo:
    <Image src={Vermintide2} alt="Vermintide 2" className="h-24 w-fill pt-4 invert dark:invert-0" />,

  },
  {
    title: "Scroll-area",
    href: "/jizz",
    logo:       <Image src={RocketLeague} alt="Rocket League" className="h-24 w-fill pt-4" />,

  },
  {
    title: "Tabs",
    href: "/7days",
    logo:
    <Image src={Days} alt="7 Days To Die" className="h-24 w-fill pt-4 invert dark:invert-0" />,

  },
  {
    title: "Tooltip",
    href: "/lsgc",
    logo:
    <Image src={LSGC} alt="Los Santos Golf Club" className="h-24 w-fill pt-4" />,

  },
]

const Schedule: {title: string, href: string, description: string}[] = [
  {
    title: "Golf",
    href: "/golfschedule",
    description: "##########",
  },
  {
    title: "Golf",
    href: "/golfschedule",
    description: "##########",
  },
  {
    title: "Golf",
    href: "/golfschedule",
    description: "##########",
  },
  {
    title: "Golf",
    href: "/golfschedule",
    description: "##########",
  },
  {
    title: "Golf",
    href: "/golfschedule",
    description: "##########",
  },
  {
    title: "Golf",
    href: "/golfschedule",
    description: "##########",
  },
]



export function Nav() {
  return (
    <div className="flex justify-between">
            <div className="flex items-center">
        <Link href="/" legacyBehavior passHref>
          <a>
            <Image
              src={guffyLogo}
              alt="Guffy Logo"
              className="h-24 w-auto pt-4 invert dark:invert-0"
            />
          </a>
        </Link>
      </div>

        <NavigationMenu>
          <NavigationMenuList className="flex space-x-4 pr-32">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  ABOUT US
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/shop" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  GUFF WEAR
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/games" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>

              <NavigationMenuTrigger>GAMES</NavigationMenuTrigger>
              </NavigationMenuLink>
              </Link>
              <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {games.map((component) => (
                <ListItem
                  key={component.title}
                  href={component.href}
                >
                  {component.logo}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>SCHEDULE</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {Schedule.map((component) => (
                    <ListItem
                      key={component.title}
                      href={component.href}
                      title={component.title}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
 
              </NavigationMenuContent>
            </NavigationMenuItem>
            
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex space-x-4 pt-4 pr-4">
        <Link href={"/login"}>
          <Button>Login</Button>
          </Link>
        <ModeToggle />

        </div>

    </div>
    
  )
}



const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"