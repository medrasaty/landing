"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  launchDate: Date
}

export default function CountdownTimer({ launchDate }: CountdownTimerProps) {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(launchDate))

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(getTimeRemaining(launchDate))
    }, 1000)

    return () => clearInterval(intervalId)
  }, [launchDate])

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000)

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="text-sm text-gray-400 uppercase tracking-widest">Launching In</div>
      <div className="grid grid-cols-4 gap-2 sm:gap-4">
        <TimeUnit value={String(days).padStart(2, "0")} label="Days" />
        <TimeUnit value={String(hours).padStart(2, "0")} label="Hours" />
        <TimeUnit value={String(minutes).padStart(2, "0")} label="Minutes" />
        <TimeUnit value={String(seconds).padStart(2, "0")} label="Seconds" />
      </div>
    </div>
  )
}

function getTimeRemaining(launchDate: Date): number {
  const now = new Date().getTime()
  const launchTime = launchDate.getTime()
  return launchTime - now > 0 ? launchTime - now : 0
}

function TimeUnit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center bg-gray-900 border border-[#7FE7E7]/20 rounded-md">
        <span className="text-xl sm:text-2xl font-mono text-[#7FE7E7]">{value}</span>
      </div>
      <span className="text-xs mt-1 text-gray-500">{label}</span>
    </div>
  )
}
