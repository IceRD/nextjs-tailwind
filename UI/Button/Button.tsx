import { ButtonProps } from "./Button.props"
import { Color, Sizes, Variant } from "UI/interfaces/config.interface"
import cn from "classnames"

const default_size = "md"
const default_color = "primary"
const default_variant = "contained"

const sizesList = {
  xs: ["px-2", "py-1", "text-sm"],
  sm: ["px-3", "py-2", "text-sm"],
  md: ["px-3", "py-2", "text-base"],
  lg: ["px-6", "py-3", "text-base"],
  xl: ["px-6", "py-4", "text-lg"],
}

const variantList = {
  primary: {
    text: ["text-primary", "hover:bg-primary-light", "hover:text-white", "active:bg-primary"],
    contained: ["bg-primary", "text-white", "hover:bg-primary-dark", "active:bg-primary-deep-dark"],
    outlined: [
      "border",
      "border-primary",
      "text-primary",
      "hover:text-white",
      "hover:bg-primary",
      "hover:border-primary-dark",
      "active:primary-deep-dark",
      "active:bg-primary-deep-dark",
    ],
  },
}

// const shadow = [
//   "shadow-md",
//   "hover:shadow-lg",
//   "focus:shadow-lg",
//   "active:shadow-lg",
//   "focus:outline-none",
//   "focus:shadow-outline",
// ]

const clasess = [
  "select-none",
  "inline-flex",
  "items-center",
  "text-base",
  "font-semibold",
  "leading-tight",
  "rounded-lg",
  "focus:outline-none",
  "focus:ring-0",
  "transition",
  "duration-150",
  "ease-in-out",
]

const useSize = function (size: Sizes) {
  return sizesList[size] || sizesList[default_size]
}

const useVariant = function (variant: Variant, color: Color) {
  return variantList[color] && variantList[color][variant]
    ? variantList[color][variant]
    : variantList[default_color][default_variant]
}

const useBlock = function (isBlock: boolean) {
  return isBlock ? ["w-full", "justify-center"] : ""
}

export const Button = ({
  children,
  size = default_size,
  color = default_color,
  variant = default_variant,
  disabled,
  block,
  startIcon,
  endIcon,
  ...props
}: ButtonProps): JSX.Element => {
  const cSize = useSize(size)
  const cVariant = useVariant(variant, color)
  const cBlock = useBlock(!!block)

  return (
    <button
      type="button"
      disabled={disabled}
      className={cn(clasess, cSize, cVariant, cBlock)}
      {...props}
    >
      {startIcon && <span className="pr-1">{startIcon}</span>}
      {children}
      {endIcon && <span className="pl-1">{endIcon}</span>}
    </button>
  )
}
