import { ReactNode, Ref, ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { Color, Sizes, Variant } from 'UI/interfaces/config.interface'

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
  size?: Sizes;
  color?: Color;
  ref?: Ref<HTMLButtonElement>;
  variant?: Variant;
  disabled?: boolean;
  block?: boolean;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  onClick?: () => void;
}
