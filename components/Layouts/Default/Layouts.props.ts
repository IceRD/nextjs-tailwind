import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"

export interface LayoutsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode
}
