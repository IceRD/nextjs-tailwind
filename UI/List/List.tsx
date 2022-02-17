import { ListProps } from "./List.props"

export const List = ({ children, ...props }: ListProps): JSX.Element => {
  return <ul {...props}>{children}</ul>
}
