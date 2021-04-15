import styled from 'styled-components'

import { AButtonColors, AButtonShapes, AButtonSizes } from './type'

interface StyledButtonProps {
  color?: AButtonColors
  shape?: AButtonShapes
  size?: AButtonSizes
  block?: Boolean
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  outline: none;
  cursor: pointer;
  box-shadow: inset 0px -2px 0px rgba(255, 255, 255, 0.5);
  transition: all 0.2s ease-in-out;
  background-color: ${(props) => props.theme.colors[props?.color || 'primary']};
  flex: ${({ block }) => (block ? '1' : 'initial')};
  border-radius: ${({ theme, shape }) =>
    theme.button.borderRadius[shape || 'square']};

  font-size: ${({ theme, size }) => theme.button.sizes[size || 'md'].font};
  padding: ${({ theme, size }) => theme.button.sizes[size || 'md'].padding};

  :hover {
    box-shadow: inset -1px -4px 0px rgba(255, 255, 255, 0.5);
  }

  :active {
    box-shadow: inset -1px -2px 0px rgba(255, 255, 255, 0.5);
  }
  :active > * {
    transform: translateY(1px);
    transition: all 0.2s ease-in-out;
  }
`
