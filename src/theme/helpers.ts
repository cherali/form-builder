import { styled as MuiStyled, CreateMUIStyled } from '@mui/material'
import ThemeConstants from './constants'

const { htmlFontSize } = ThemeConstants

export const pxToRem = (px: number, baseFontSize: number = htmlFontSize) =>
  `${(px / baseFontSize).toFixed(3)}rem`

export const styled: CreateMUIStyled<ITheme & Theme> = (component: any, options: any) => MuiStyled(component, options) as unknown as any
