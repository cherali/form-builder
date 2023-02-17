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
        '*::-webkit-scrollbar': {
          width: '6px'
        },
        '*::-webkit-scrollbar-track': {
          'WebkitBoxShadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0,0,0,.15)',
        },
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
