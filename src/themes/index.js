import { css } from 'styled-components'

const breakpoint = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
}

const colors = {
  light: '#fff',
  dark1: '#2e2e2e',
  dark2: '#414141',
  primary: '#dba191',
  secondary: '#9bd4df',
  primaryGradient: 'linear-gradient(180deg, #FFCC21 0%, #FF963C 100%)',
  gray1: '#777777',
  gray2: '#2e2e2e',
}

const fontSizes = {
  xs: '10px',
  sm: '12px',
  md: '14px',
  lg: '16px',
  xl: '20px',
  xxl: '24px',
  xxxl: '32px',
}

const fontWeights = {
  light: 300,
  regular: 400,
  bold: 700,
}

const fontFamily = {
  jp: 'Noto Sans JP',
  en: "'Shantell Sans', sans-serif",
  vi: "'Shantell Sans', sans-serif",
}

const borderRadius = {
  sm: '3px',
  md: '5px',
  lg: '8px',
  rounded: '999px',
}

const boxShadow = {
  md: '0px 3px 6px rgba(0, 0, 0, 0.160784)',
}

const container = {
  md: '960px',
}

const truncateMultipleLine = (linesToShow: number = 1) => css`
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: ${linesToShow};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  breakpoint,
  colors,
  fontSizes,
  fontWeights,
  fontFamily,
  borderRadius,
  boxShadow,
  container,
  truncateMultipleLine,
}
