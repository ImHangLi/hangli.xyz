"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import AppleMenu from "./AppleMenu"

export default function MenuBar() {
  // State for Apple Menu
  const [showAppleMenu, setShowAppleMenu] = useState(false)

  // State for current time and date
  const [currentTime, setCurrentTime] = useState<string>("")
  const [currentDate, setCurrentDate] = useState<string>("")

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()

      // Format time as "h:mm AM/PM"
      const timeString = now
        .toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
        .toLowerCase()

      // Get individual components
      const weekday = now.toLocaleDateString("en-US", { weekday: "short" })
      const day = now.getDate()
      const month = now.toLocaleDateString("en-US", { month: "short" })

      // Combine in desired format "Mon 6 Jan"
      const dateString = `${weekday} ${day} ${month}`

      setCurrentTime(timeString)
      setCurrentDate(dateString)
    }

    // Update immediately
    updateDateTime()

    // Update every minute
    const interval = setInterval(updateDateTime, 60000)

    // Cleanup interval on unmount
    return () => clearInterval(interval)
  }, [])

  return (
    /* MenuBar */
    <div className="flex justify-between items-center bg-cyan-50/70 backdrop-blur-[10px] h-8 px-[20px] text-black">
      {/* Left Section */}
      <div className="flex items-center space-x-6">
        {/* Apple Menu */}
        <div className="relative">
          <button
            onClick={() => setShowAppleMenu(!showAppleMenu)}
            className="text-xl hover:bg-black/10 rounded px-2"
          >
            
          </button>
          
          <AppleMenu 
            isOpen={showAppleMenu} 
            onClose={() => setShowAppleMenu(false)} 
          />
        </div>
        <span className="font-bold">Finder</span>
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Go</span>
        <span>Window</span>
        <span>Help</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-[20px]">
        <Image
          src="/wifi.svg"
          alt="Wi-Fi"
          width={20}
          height={20}
          className="w-5 h-5"
        />
        <Image
          src="/search.svg"
          alt="Search"
          width={20}
          height={20}
          className="w-5 h-5"
        />
        <Image
          src="/control.svg"
          alt="Control Center"
          width={20}
          height={20}
          className="w-5 h-5"
        />
        <span>{currentDate}</span>
        <span>{currentTime}</span>
      </div>
    </div>
  )
}
