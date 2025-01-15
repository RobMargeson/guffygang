"use client"
import { ModeToggle } from "./togglemode";
import guffyLogo from "@/images/guffylogo1.png"
import * as React from "react"
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
              <Link href="/about" legacyBehavior passHref>
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
              <Link href="/schedule" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  SCHEDULE
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>GAMES</NavigationMenuTrigger>
              <NavigationMenuContent>
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
