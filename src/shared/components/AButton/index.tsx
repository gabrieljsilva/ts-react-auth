import React from 'react'

import { AButtonProps } from './type'
import { StyledButton } from './styled'
import { AIcon } from '../AIcon'

export function AButton({
  children,
  icon: Icon,
  iconSide = 'left',
  ...props
}: AButtonProps) {
  return (
    <StyledButton {...props}>
      <AIcon>{iconSide === 'left' ? Icon : <> </>}</AIcon>
      <span>{children}</span>
      <AIcon>{iconSide === 'right' ? Icon : <> </>}</AIcon>
    </StyledButton>
  )
}
