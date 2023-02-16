import { createTheme, ThemeOptions } from '@mui/material/styles'
import components from './components'
import shadows from './shadows'
import transitions from './transitions'

const options: Omit<IThemeOptions, 'palette'> = {
  shadows,
  spacing: 2,
  transitions,
  components,
  shape: { borderRadius: 2 },
}

export const lightTheme = createTheme({
  ...options,
  darkMode: false,
} as ThemeOptions) as unknown as ITheme

