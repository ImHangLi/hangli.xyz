import Dropdown, { DropdownItem, DropdownDivider, MenuProps } from "./Dropdown"

export function AppleMenu({ isOpen, onClose }: MenuProps) {
  return (
    <Dropdown isOpen={isOpen} onClose={onClose}>
      <DropdownItem>About This Website</DropdownItem>
      <DropdownDivider />
      <DropdownItem>System Settings...</DropdownItem>
      <DropdownItem>App Store</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Recent Items</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Force Quit</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Sleep</DropdownItem>
      <DropdownItem>Restart...</DropdownItem>
      <DropdownItem>Shut Down...</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Lock Screen</DropdownItem>
      <DropdownItem>Log Out Hang Li...</DropdownItem>
    </Dropdown>
  )
}

export function FinderMenu({ isOpen, onClose }: MenuProps) {
  return (
    <Dropdown isOpen={isOpen} onClose={onClose}>
      <DropdownItem>About Finder</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Settings...</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Empty Bin...</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Services</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Hide Finder</DropdownItem>
      <DropdownItem>Hide Others</DropdownItem>
      <DropdownItem className="pointer-events-none text-[#9ab3b3]">
        Show All
      </DropdownItem>
    </Dropdown>
  )
}

export function FileMenu({ isOpen, onClose }: MenuProps) {
  return (
    <Dropdown isOpen={isOpen} onClose={onClose}>
      <DropdownItem>New Finder Window</DropdownItem>
      <DropdownItem>New Folder</DropdownItem>
      <DropdownItem className="pointer-events-none text-[#9ab3b3]">
        New Folder With Selection
      </DropdownItem>
      <DropdownItem>New Smart Folder</DropdownItem>
      <DropdownItem>New Tab</DropdownItem>
      <DropdownItem>Open</DropdownItem>
      <DropdownItem className="pointer-events-none text-[#9ab3b3]">
        Open With
      </DropdownItem>
      <DropdownItem>Close Window</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Get Info</DropdownItem>
      <DropdownItem className="pointer-events-none text-[#9ab3b3]">
        Rename
      </DropdownItem>
      <DropdownItem className="pointer-events-none text-[#9ab3b3]">
        Compress
      </DropdownItem>
      <DropdownItem className="pointer-events-none text-[#9ab3b3]">
        Make Alias
      </DropdownItem>
      <DropdownItem>Quick Look &quot;hangli&quot;</DropdownItem>
      <DropdownItem className="pointer-events-none text-[#9ab3b3]">
        Print
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem className="pointer-events-none text-[#9ab3b3]">
        Share
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem className="pointer-events-none text-[#9ab3b3]">
        Show Original
      </DropdownItem>
      <DropdownItem className="pointer-events-none text-[#9ab3b3]">
        Add to Sidebar
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem className="pointer-events-none text-[#9ab3b3]">
        Move to Bin
      </DropdownItem>
      <DropdownItem className="pointer-events-none text-[#9ab3b3]">
        Eject
      </DropdownItem>
      <DropdownDivider />

      {/* Color Palette */}
      <div className="flex px-4 space-x-3 py-2">
        {[
          "#eb9f9c",
          "#e9c296",
          "#e9dc9a",
          "#98dda3",
          "#8bb6f4",
          "#c8a8e1",
          "#c0c1c3",
        ].map((color, index) => (
          <div
            key={index}
            className="w-4 h-4 rounded-full cursor-default"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      <DropdownItem className="pointer-events-none text-[#9ab3b3]">
        Tags...
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem>Find</DropdownItem>
    </Dropdown>
  )
}

export function EditMenu({ isOpen, onClose }: MenuProps) {
  return (
    <Dropdown isOpen={isOpen} onClose={onClose}>
      <DropdownItem>Undo</DropdownItem>
      <DropdownItem className="pointer-events-none text-[#9ab3b3]">
        Redo
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem className="pointer-events-none text-[#9ab3b3]">
        Cut
      </DropdownItem>
      <DropdownItem>Copy</DropdownItem>
      <DropdownItem className="pointer-events-none text-[#9ab3b3]">
        Paste
      </DropdownItem>
      <DropdownItem>Select All</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Show Clipboard</DropdownItem>
      <DropdownDivider />
      <DropdownItem>AutoFill</DropdownItem>
      <DropdownItem>Start Dictation...</DropdownItem>
      <DropdownItem>Emoji & Symbols</DropdownItem>
    </Dropdown>
  )
}

export function ViewMenu({ isOpen, onClose }: MenuProps) {
  return (
    <Dropdown isOpen={isOpen} onClose={onClose}>
      <DropdownItem>as Icons</DropdownItem>
      <DropdownItem className="pointer-events-none text-[#9ab3b3]">
        as List
      </DropdownItem>
      <DropdownItem className="pointer-events-none text-[#9ab3b3]">
        as Columns
      </DropdownItem>
      <DropdownItem className="pointer-events-none text-[#9ab3b3]">
        as Gallery
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem>Use Stacks</DropdownItem>
      <DropdownItem className="pointer-events-none text-[#9ab3b3]">
        Group Stacks by
      </DropdownItem>
      <DropdownItem className="pointer-events-none text-[#9ab3b3]">
        Clean Up
      </DropdownItem>
      <DropdownItem className="pointer-events-none text-[#9ab3b3]">
        Clean Up by
      </DropdownItem>
    </Dropdown>
  )
}

export function GoMenu({ isOpen, onClose }: MenuProps) {
  return (
    <Dropdown isOpen={isOpen} onClose={onClose}>
      <DropdownItem className="pointer-events-none text-[#9ab3b3]">
        Back
      </DropdownItem>
      <DropdownItem className="pointer-events-none text-[#9ab3b3]">
        Forward
      </DropdownItem>
      <DropdownItem>Enclosing Folder</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Recent Folders</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Go to Folder...</DropdownItem>
      <DropdownItem>Connect to Server...</DropdownItem>
    </Dropdown>
  )
}

export function WindowMenu({ isOpen, onClose }: MenuProps) {
  return (
    <Dropdown isOpen={isOpen} onClose={onClose}>
      <DropdownItem>Minimize</DropdownItem>
      <DropdownItem>Zoom</DropdownItem>
      <DropdownItem>Fill</DropdownItem>
      <DropdownItem>Centre</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Move & Resize</DropdownItem>
      <DropdownItem>Full-Screen Tile</DropdownItem>
      <DropdownDivider />
      <DropdownItem className="pointer-events-none text-[#9ab3b3]">
        Remove Window from Set
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem>Move to Hang&apos;s iPad</DropdownItem>
      <DropdownItem>Cycle Through Windows</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Bring All to Front</DropdownItem>
    </Dropdown>
  )
}

export function HelpMenu({ isOpen, onClose }: MenuProps) {
  return (
    <Dropdown isOpen={isOpen} onClose={onClose}>
      <DropdownItem>Mac User Guide</DropdownItem>
      <DropdownItem>Tips for Your Mac</DropdownItem>
    </Dropdown>
  )
}
