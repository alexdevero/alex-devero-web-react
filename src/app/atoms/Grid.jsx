import styled, { css } from 'styled-components'

/* Function for converting pixels to rems */
const REMY = px => `${px / 16}rem`

/* Function for calculating value for width */
const GET_WIDTH = (value) => {
  if (!value) return

  let width = value / 12 * 100
  return `width: ${width}%;`
}

/* Function for calculating value for flex */
const GETFLEX = (value) => {
  if (!value) return

  let flex = value / 12 * 100
  return `flex: 0 0 ${flex}%;`
}

/* Grid container */
export const GridContainer = styled.div`
  padding-right: ${REMY(15)};
  padding-left: ${REMY(15)};
  margin-right: auto;
  margin-left: auto;
  width: 100%;

  /* Breakpoint for tablets */
  @media (min-width: 576px) {
    max-width: ${REMY(540)};
  }

  /* Breakpoint for small desktops */
  @media (min-width: 768px) {
    max-width: ${REMY(720)};
  }

  /* Breakpoint for medium desktops */
  @media (min-width: 992px) {
    max-width: ${REMY(9600)};
  }

  /* Breakpoint for large desktops and HD devices */
  @media (min-width: 1200px) {
    max-width: ${REMY(1140)};
  }

  ${props => props.fluid && css`
    max-width: 100%;
  `}
`

/* Grid row */
export const GridRow = styled.div`
  margin-right: ${REMY(-15)};
  margin-left: ${REMY(-15)};
  display: flex;
  flex-wrap: wrap;
`

/* Grid columns */
export const GridColumn = styled.div`
  padding-right: ${REMY(15)};
  padding-left: ${REMY(15)};

  /* Columns for mobile */
  ${({ xs }) => (xs ? GET_FLEX(xs) : 'flex: 0 0 100%')};
  ${({ xs }) => (xs ? GET_WIDTH(xs) : 'width: 100%')};

  /* Columns for tablets */
  @media (min-width: 576px) {
    ${({ sm }) => sm && GET_FLEX(sm)};
    ${({ sm }) => sm && GET_WIDTH(sm)};
  }

  /* Columns for small desktops */
  @media (min-width: 768px) {
    ${({ md }) => md && GET_FLEX(md)};
    ${({ md }) => md && GET_WIDTH(md)};
  }

  /* Columns for medium desktops */
  @media (min-width: 992px) {
    ${({ lg }) => lg && GET_FLEX(lg)};
    ${({ lg }) => lg && GET_WIDTH(lg)};
  }

  /* Columns for large desktops and HD devices */
  @media (min-width: 1200px) {
    ${({ xl }) => xl && GET_FLEX(xl)};
    ${({ xl }) => xl && GET_WIDTH(xl)};
  }
`
