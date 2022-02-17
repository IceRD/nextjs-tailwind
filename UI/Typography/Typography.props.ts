import { ReactNode, Ref } from "react";

export type  Variants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'body' | 'subtitle'
export type  Component = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'div' | 'span' | 'p'


export interface TypographyProps {
  className?: string;
  children: ReactNode;
  ref?: Ref<HTMLButtonElement>;
  variant?: Variants;
  component?: Component;
}
