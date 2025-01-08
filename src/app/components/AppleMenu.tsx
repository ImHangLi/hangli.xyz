import Dropdown, { DropdownItem, DropdownDivider } from "./Dropdown"

interface AppleMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function AppleMenu({ isOpen, onClose }: AppleMenuProps) {
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
