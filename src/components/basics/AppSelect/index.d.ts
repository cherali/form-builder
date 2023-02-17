import type { ReactNode } from 'react'
import type { AppTextFieldProps } from '../AppTextField/index.d'

interface OptionsProps {
  title: string;
  value: string;
}

export interface AppSelectProps extends AppTextFieldProps {
  options: Array<OptionsProps>;
  error?: boolean;
  helperText?: ReactNode;
}