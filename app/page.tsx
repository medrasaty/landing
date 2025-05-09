import Link from "next/link";
import { Github } from "lucide-react";
import AbstractPixelArt from "@/components/abstract-pixel-art";

export default function LandingPage() {
  // Calculate date 2 months from now
  const currentDate = new Date();
  const launchDate = new Date(currentDate);
  launchDate.setMonth(currentDate.getMonth() + 1);

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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter">
              Coming Soon
            </h1>

            {/* Digital Watch Style Countdown */}
            <div className="flex flex-col items-center space-y-4">
              <div className="text-sm text-gray-400 uppercase tracking-widest">
                Launching In
              </div>

              <div className="bg-black border-2 border-[#7FE7E7] rounded-lg p-4 sm:p-6 inline-block shadow-[0_0_15px_rgba(127,231,231,0.3)]">
                <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                  <DigitalTimeUnit value="60" label="DAYS" />
                  <div className="text-[#7FE7E7] text-2xl sm:text-4xl font-bold animate-pulse">
                    :
                  </div>
                  <DigitalTimeUnit value="00" label="HRS" />
                  <div className="text-[#7FE7E7] text-2xl sm:text-4xl font-bold animate-pulse">
                    :
                  </div>
                  <DigitalTimeUnit value="00" label="MIN" />
                  <div className="text-[#7FE7E7] text-2xl sm:text-4xl font-bold animate-pulse">
                    :
                  </div>
                  <DigitalTimeUnit value="00" label="SEC" />
                </div>
              </div>
            </div>

            <p className="text-gray-400 max-w-md mx-auto pt-4">
              We're building something awesome. Stay tuned for updates.
            </p>
          </div>
        </div>
      </main>

      <footer className="container mx-auto py-6 px-4 text-center text-xs text-gray-600">
        <p>
          © {new Date().getFullYear()}{" "}
          <Link
            href="https://medrasaty.tech"
            className="hover:text-[#7FE7E7] transition-colors"
          >
            medrasaty.tech
          </Link>
          . All rights reserved.
        </p>
      </footer>
    </div>
  );
}

function DigitalTimeUnit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-900 px-2 sm:px-3 py-1 sm:py-2 rounded-md font-mono">
        <span className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#7FE7E7] tracking-wider digital-font">
          {value}
        </span>
      </div>
      <span className="text-xs sm:text-sm mt-1 text-[#7FE7E7]/70 font-bold tracking-wider">
        {label}
      </span>
    </div>
  );
}
