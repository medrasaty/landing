import Link from "next/link"
import { Github } from "lucide-react"
import AbstractPixelArt from "@/components/abstract-pixel-art"
import CountdownTimer from "@/components/countdown-timer"
import { FORMATTED_LAUNCH_DATE } from "@/lib/constants"

export default function LandingPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-black text-white font-mono">
      <header className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 bg-[#7FE7E7]"></div>
          <Link
            href="https://medrasaty.tech"
            className="text-xl font-bold tracking-tight hover:text-[#7FE7E7] transition-colors"
          >
            medrasaty.tech
          </Link>
        </div>
        <Link
          href="https://github.com/medrasaty"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <Github className="h-5 w-5" />
          <span className="hidden sm:inline">GitHub</span>
        </Link>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="max-w-3xl w-full space-y-12 text-center">
          <AbstractPixelArt />

          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter">Coming Soon</h1>

            {/* Fixed launch date countdown timer */}
            <CountdownTimer />

            <p className="text-gray-400 max-w-md mx-auto pt-4">
              We're building something awesome. Stay tuned for updates.
              <span className="block mt-2 text-sm">
                <span className="text-[#7FE7E7]">Launch Date:</span> {FORMATTED_LAUNCH_DATE}
              </span>
            </p>
          </div>
        </div>
      </main>

      <footer className="container mx-auto py-6 px-4 text-center text-xs text-gray-600">
        <p>
          © {new Date().getFullYear()}{" "}
          <Link href="https://medrasaty.tech" className="hover:text-[#7FE7E7] transition-colors">
            medrasaty.tech
          </Link>
          . All rights reserved.
        </p>
      </footer>
    </div>
  )
}
