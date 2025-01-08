import { ReactNode } from "react"

interface DropdownProps {
  isOpen: boolean
  onClose?: () => void
  children: ReactNode
  className?: string
}

export default function Dropdown({
  isOpen,
  children,
  className = "",
}: DropdownProps) {
  if (!isOpen) return null

  return (
    <div
      className={`absolute top-8 left-0 w-56 bg-white/90 backdrop-blur-[10px] rounded-lg shadow-lg py-2 z-50 ${className}`}
    >
      {children}
    </div>
  )
}

// Reusable dropdown items components
export function DropdownItem({
  children,
  onClick,
}: {
  children: ReactNode
  onClick?: () => void
}) {
  return (
    <div
      className="px-4 py-2 hover:bg-black/10 cursor-default"
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export function DropdownDivider() {
  return <div className="border-b border-gray-200 my-2" />
}
