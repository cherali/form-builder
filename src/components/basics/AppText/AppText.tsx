import type { FC } from 'react'
import Typography from '@mui/material/Typography'
import type { AppTextProps } from './index.d'

const AppText: FC<AppTextProps> = ({ children, ...props }) => {

  return (
    <Typography
      {...props}
    >
      {children}
    </Typography>
  )
}

export default AppText
