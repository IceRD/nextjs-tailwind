import { LayoutsProps } from "./Layouts.props"
import TheHeader from "../TheHeader"
import TheNavbar from "../TheNavbar"
import TheMain from "../TheMain"
import TheFooter from "../TheFooter"

export default function Layout({ children }: LayoutsProps) {
  return (
    <>
      <TheHeader />
      <TheNavbar />
      <TheMain>{children}</TheMain>
      <TheFooter />
    </>
  )
}
