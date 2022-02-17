import { ReactNode, HTMLAttributes } from "react";

export interface ListProps extends HTMLAttributes<HTMLUListElement>{
  children: ReactNode;
}
