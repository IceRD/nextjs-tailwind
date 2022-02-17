import { createElement } from "react"
import { TypographyProps } from "./Typography.props"
import cn from "classnames"

const variantList = {
  h1: "text-5xl",
  h2: "text-4xl",
  h3: "text-3xl",
  h4: "text-2xl",
  h5: "text-xl",
  body: "text-base",
  subtitle: "text-sm",
}

const componentList = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  div: "div",
  span: "span",
  p: "p",
}

export const Typography = ({
  children,
  variant = "body",
  component = "p",
  className,
  ...props
}: TypographyProps): JSX.Element => {
  const fontSize = variantList[variant]
  const componentType = componentList[component]

  return createElement(
    componentType,
    { className: cn(["font-serif", fontSize, className]), ...props },
    children,
  )
}
