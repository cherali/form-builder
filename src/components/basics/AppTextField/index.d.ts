import type { ChangeEvent } from 'react'
import type { TextFieldClasses, TextFieldProps, StandardInputProps, InputProps } from '@mui/material'
import type { AppIconName } from 'components/AppIcon'

export interface AppTextFieldProps extends Omit<TextFieldProps, "error" | "type" | "size" | "variant"> {
  type?: HTMLInputType;
  error?: boolean;
  variant?: 'filled' | 'outlined';
  size?: 'small' | 'medium';
  maxLength?: number;
  rightPrefix?: ReactNode | Element;
  leftPrefix?: ReactNode | Element;
  onClear?: () => void;
  secure?: boolean;
  defaultShowSecureValue?: boolean;
  clearable?: boolean;
  startIcon?: OverridableComponent;
  textTransform?: (onChange: StandardInputProps['onChange'], evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  description?: string;
  formatter?: FieldFormatterType;
}