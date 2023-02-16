import type { FC } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider as MuiThemeProvider, StyledEngineProvider } from '@mui/material'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { lightTheme } from 'theme'
import type { ThemeProviderProps } from './index.d'

// Create cache
const cache = createCache({
  key: 'css',
  prepend: true,
});


const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return (
    <CacheProvider value={cache}>
      <StyledEngineProvider injectFirst>
        <MuiThemeProvider theme={Object.assign(lightTheme, { direction: 'ltr' })} >
          <CssBaseline />
          {children}
        </MuiThemeProvider>
      </StyledEngineProvider>
    </CacheProvider>
  )
}


export default ThemeProvider
