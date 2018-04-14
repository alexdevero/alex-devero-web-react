import styled, { css } from 'styled-components'

export const Link = styled.a`
  ${props => this.props.red && css`
    color: ${props => this.props.theme.colorRed};
  `}
`
