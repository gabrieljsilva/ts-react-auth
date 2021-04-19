import styled from 'styled-components'

import { AButtonProps } from './types'

export const StyledButton = styled.button<AButtonProps>`
  outline: none;
  padding: 8px 16px 8px 16px;
  border-radius: 24px;
  color: white;
  background-color: ${({ theme, color }) =>
    theme.button.colors[color || 'primary']};
`
