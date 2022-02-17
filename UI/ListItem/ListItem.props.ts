import { ReactNode, LiHTMLAttributes } from "react";

export interface ListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  children: ReactNode;
}
