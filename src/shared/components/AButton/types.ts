import { HTMLAttributes } from 'react'

export type AButtonProps = HTMLAttributes<HTMLButtonElement> & {
  color?: 'primary' | 'secondary'
}
