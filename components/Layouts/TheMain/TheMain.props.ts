import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TheMainProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
  children: ReactNode;
}
