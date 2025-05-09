"use client"

import { useState, useEffect } from "react"
import { LAUNCH_DATE } from "@/lib/constants"

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = LAUNCH_DATE.getTime() - new Date().getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        setTimeLeft({
          days: days.toString().padStart(2, "0"),
          hours: hours.toString().padStart(2, "0"),
          minutes: minutes.toString().padStart(2, "0"),
          seconds: seconds.toString().padStart(2, "0"),
        })
      } else {
        // If launch date has passed
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        })
      }
    }

    // Calculate immediately
    calculateTimeLeft()

    // Then set up interval
    const timer = setInterval(calculateTimeLeft, 1000)

    // Clean up interval on unmount
    return () => clearInterval(timer)
  }, []) // Empty dependency array since we're using the constant LAUNCH_DATE

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="text-sm text-gray-400 uppercase tracking-widest">Launching In</div>

      <div className="bg-black border-2 border-[#7FE7E7] rounded-lg p-4 sm:p-6 inline-block shadow-[0_0_15px_rgba(127,231,231,0.3)]">
        <div className="flex items-center justify-center space-x-2 sm:space-x-3">
          <DigitalTimeUnit value={timeLeft.days} label="DAYS" />
          <div className="text-[#7FE7E7] text-2xl sm:text-4xl font-bold animate-pulse">:</div>
          <DigitalTimeUnit value={timeLeft.hours} label="HRS" />
          <div className="text-[#7FE7E7] text-2xl sm:text-4xl font-bold animate-pulse">:</div>
          <DigitalTimeUnit value={timeLeft.minutes} label="MIN" />
          <div className="text-[#7FE7E7] text-2xl sm:text-4xl font-bold animate-pulse">:</div>
          <DigitalTimeUnit value={timeLeft.seconds} label="SEC" />
        </div>
      </div>
    </div>
  )
}

function DigitalTimeUnit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-900 px-2 sm:px-3 py-1 sm:py-2 rounded-md font-mono">
        <span className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#7FE7E7] tracking-wider digital-font">
          {value}
        </span>
      </div>
      <span className="text-xs sm:text-sm mt-1 text-[#7FE7E7]/70 font-bold tracking-wider">{label}</span>
    </div>
  )
}
