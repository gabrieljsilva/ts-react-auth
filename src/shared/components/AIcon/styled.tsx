import styled from 'styled-components'

export const StyledIconContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 12px 4px 12px;
  &.size-sm > * {
    font-size: ${(props) => props.theme.icon.sizes.sm};
  }
  &.size-md > * {
    font-size: ${(props) => props.theme.icon.sizes.md};
  }
  &.size-lg > * {
    font-size: ${(props) => props.theme.icon.sizes.lg};
  }
`
