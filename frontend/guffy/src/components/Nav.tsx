import { ModeToggle } from "./togglemode";

export default function Nav() {
    return (
        <header>
            <nav>
                <ul className="flex justify-between items-center p-4">
                    <li>
                        <a
                                    className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                                    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                
                                    Deploy now
                                  </a>
                        
                    </li>
                    <li>
                        <h1>Second item</h1>
                    </li>
                    <li><ModeToggle /></li>
                </ul>
            </nav>
        </header>
    )
}