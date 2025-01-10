"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { AppleMenu, EditMenu, FileMenu, FinderMenu, GoMenu, HelpMenu, ViewMenu, WindowMenu } from "./MenuItems"

interface MenuButtonProps {
  className?: string
  content: string
  MenuItem: React.ComponentType<{ isOpen: boolean; onClose: () => void }>
  onClick?: () => void
}

export default function MenuBar() {
  // State for Apple Menu
  const [ShowMenu, setShowMenu] = useState<string | null>(null)

  // Menu Button
  function MenuButton({ className = "", content, MenuItem }: MenuButtonProps) {
    const isActive = ShowMenu === content

    return (
      <div
        className="relative left-1"
        onMouseEnter={() => ShowMenu && setShowMenu(content)}
      >
        <button
          onClick={() => setShowMenu(isActive ? null : content)}
          className={`${className} ${
            isActive ? "bg-[#b4e2e4] hover:bg-[#b4e2e4]" : "active:bg-[#b4e2e4]"
          } rounded px-4 -mx-4 h-[25px] cursor-default flex items-center`}
        >
          {content}
        </button>

        <MenuItem isOpen={isActive} onClose={() => setShowMenu(null)} />
      </div>
    )
  }

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
    <div className="flex justify-between items-center bg-[#d0fcfc] backdrop-blur-[10px] h-9 px-[10px] text-black text-[14.5px]">
      {/* Left Section */}
      <div className="flex items-center mx-2 space-x-[24px]">
        {/* Apple Menu */}
        <MenuButton className="text-xl" content="" MenuItem={AppleMenu} />
        <MenuButton
          className="font-bold"
          content="Finder"
          MenuItem={FinderMenu}
        />
        <MenuButton content="File" MenuItem={FileMenu} />
        <MenuButton content="Edit" MenuItem={EditMenu} />
        <MenuButton content="View" MenuItem={ViewMenu} />
        <MenuButton content="Go" MenuItem={GoMenu} />
        <MenuButton content="Window" MenuItem={WindowMenu} />
        <MenuButton content="Help" MenuItem={HelpMenu} />
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
