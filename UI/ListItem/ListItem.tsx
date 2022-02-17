import { ListItemProps } from "./ListItem.props"

export const List = ({ children, ...props }: ListItemProps): JSX.Element => {
  return <li {...props}>{children}</li>
}
