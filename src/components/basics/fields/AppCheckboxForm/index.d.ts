import type { ReactNode } from 'react'
import type { FormControlLabelProps, CheckboxProps } from '@mui/material'

export interface AppCheckboxFormProps extends CheckboxProps {
  label?: string;
  name: string;
  children?: ReactNode;
  labelPlacement?: FormControlLabelProps.labelPlacement
}