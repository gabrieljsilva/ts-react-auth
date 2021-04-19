import React from 'react'

import { AButtonProps } from './types'
import { StyledButton } from './styled'

export function AButton({
  children,
  color = 'primary',
  ...props
}: AButtonProps) {
  return (
    <StyledButton data-testid="a-button" color={color} {...props}>
      {children}
    </StyledButton>
  )
}
