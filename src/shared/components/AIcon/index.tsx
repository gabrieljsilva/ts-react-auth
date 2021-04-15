import React, { Children } from 'react'

import { AIconProps } from './types'
import { StyledIconContainer } from './styled'

export function AIcon({ children, className }: AIconProps) {
  return (
    <StyledIconContainer className={className}>{children}</StyledIconContainer>
  )
}
