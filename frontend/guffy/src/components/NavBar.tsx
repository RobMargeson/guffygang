"use client"
import { ModeToggle } from "./togglemode";
import guffyLogo from "@/images/guffylogo1.png"
import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

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
    <div className="flex">
<NavigationMenu>
      <NavigationMenuList>
                    <NavigationMenuItem className="flex-start">
                    <Image src={guffyLogo} alt="Guffy Logo" className="fill-current" />
                    </NavigationMenuItem>
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
            <Link href="/games" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                GAMES
              </NavigationMenuLink>
              </Link>
            </NavigationMenuItem> 
        <NavigationMenuItem className="flex-end" >
            <ModeToggle />
        </NavigationMenuItem>
              </NavigationMenuList>
    </NavigationMenu>
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
