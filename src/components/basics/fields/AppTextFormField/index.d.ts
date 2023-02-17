import { AppTextFieldProps } from './../AppTextField/index.d'

type EType = 'error' | 'value' | 'onChange' | 'onClear' | 'name'

export interface AppTextFormFieldProps extends Omit<AppTextFieldProps, EType> {
  name: string;
  onClear?: () => void;
}