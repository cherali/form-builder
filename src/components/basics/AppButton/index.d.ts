import type { ButtonProps } from '@mui/material/Button'

export interface AppButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: 'outlined' | 'contained' | 'text';
}