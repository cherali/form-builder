import type { Components as MuiComponents, Theme } from '@mui/material'
import { fontFaces } from './fontFace'


const components: MuiComponents<Theme> = {
  MuiInputBase: {
    styleOverrides: {
      root: {
        height: 50,
      }
    }
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        top: -2,
      },
      sizeSmall: {
        top: 3,
      },
      shrink: {
        top: 0,
      },
    }
  },
  MuiButton: {
    styleOverrides: {
      sizeSmall: {
        height: 25,
      },
      sizeMedium: {
        height: 36,
      },
      sizeLarge: {
        height: 45,
      },
    }
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        fontSize: 16,
        boxShadow: 'unset',
        borderRadius: 8,
      },
      sizeSmall: {
        height: 25,
      },
      sizeMedium: {
        height: 36,
      },
      sizeLarge: {
        height: 45,
      },
    },
  },

  MuiCssBaseline: {
    styleOverrides: {
      '@fontFace': fontFaces,
      'html': {
        margin: 0,
      },
      'body': {
        margin: 0,
        overflowX: 'hidden',
      },

      '*': {
        fontFamily: '"Lato", "IRANSans"'
      },
      'a': {
        textDecoration: 'none',
      },

    },
  },
}

export default components
