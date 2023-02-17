import type { ReactNode } from 'react'
import type { FormControlLabelProps, RadioGroupProps } from '@mui/material'

export interface AppRadioProps extends RadioGroupProps {
  label?: string;
  error?: boolean;
  helperText?: string;
  options: Array<AppRadioOptionProps>;
  alignment?: 'vertical' | 'horizontal';
  description?: string;
}

export interface AppRadioOptionProps {
  title: string;
  value: string;
}