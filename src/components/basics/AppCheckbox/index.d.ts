import type { ReactNode } from 'react'
import type { FormControlLabelProps, CheckboxProps } from '@mui/material'

export interface AppCheckboxProps extends CheckboxProps {
  label?: string;
  labelPlacement?: FormControlLabelProps.labelPlacement;
  children?: ReactNode;
  error?: boolean;
  helperText?: string;
  onChange: (...event: any[]) => void;
  description?: string;
}