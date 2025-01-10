import React, { useEffect } from "react"
import { ReactNode } from "react"

export interface MenuProps {
  isOpen: boolean
  onClose: () => void
}

interface DropdownProps {
  isOpen: boolean
  onClose?: () => void
  children: ReactNode
  className?: string
}

export default function Dropdown({
  isOpen,
  onClose,
  children,
  className = "",
}: DropdownProps) {
  useEffect(() => {
    // Handle any click when dropdown is open
    function handleClick() {
      if (isOpen) {
        onClose?.()
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [isOpen, onClose])

  // If dropdown is not open, return nothing
  if (!isOpen) return null

  return (
    <div
      className={`absolute top-8 -left-4 w-[220px] bg-[#cff2f1] backdrop-blur-sm backdrop-invert backdrop-opacity-10 rounded-lg border-zinc-300 border-[0.5px] shadow-lg py-2 z-50 ${className}`}
    >
      {children}
    </div>
  )
}

// Reusable dropdown items components
export function DropdownItem({
  children,
  onClick,
  className = "",
}: {
  children: ReactNode
  onClick?: () => void
  className?: string
}) {
  return (
    <div
      className={`px-2 py-1 hover:bg-[#589cfc] rounded-md mx-[6px] cursor-default hover:text-white ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export function DropdownDivider() {
  return <div className="border-[1.1px] border-gray-300 mx-[14px] my-1" />
}
