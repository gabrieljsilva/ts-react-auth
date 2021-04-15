import React, { ReactNode, HTMLAttributes } from 'react'

export type AButtonColors =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'

export type AButtonSizes = 'sm' | 'md' | 'lg'

export type AButtonShapes = 'rounded' | 'square'

export type AButtonIconSide = 'left' | 'right'

export type AButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  shape?: AButtonShapes
  color: AButtonColors
  size?: AButtonSizes
  icon?: ReactNode
  iconSide?: AButtonIconSide
  block?: Boolean
}
