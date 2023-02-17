import { FC, forwardRef } from 'react'
import Grid from '@mui/material/Grid'
import type { AppGridProps } from './index.d'

const AppGrid: FC<AppGridProps> = forwardRef(({ children, ...props }, ref) => {

  return (
    <Grid
      ref={ref}
      {...props}
    >
      {children}
    </Grid>
  )
})

export default AppGrid
