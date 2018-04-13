import styled, { css } from 'styled-components'

const HEADING_STYLES = css`
  margin-top: 0;
  font-family: sans-serif;
  font-weight: 500;
  line-height: 1.3;
`

export const H1 = styled.h1`
  ${HEADING_STYLES};

  font-size: 40px;
`

export const H2 = styled.h2`
  ${HEADING_STYLES};

  font-size: 27px;
`

export const H3 = styled.h3`
  ${HEADING_STYLES};

  font-size: 22px;
`

export const H4 = styled.h4`
  ${HEADING_STYLES};

  font-size: 19.2px;
`

export const H5 = styled.h5`
  ${HEADING_STYLES};

  font-size: 16px;
`

export const H6 = styled.h6`
  ${HEADING_STYLES};

  font-size: 14px;
`
