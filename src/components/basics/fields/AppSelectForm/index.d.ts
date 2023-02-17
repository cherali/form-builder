import { AppSelectProps } from './../AppSelect/index.d'


import { AppTextFieldProps } from './../AppTextField/index.d'

type EType = 'error' | 'value' | 'onChange' | 'onClear' | 'name'

export interface AppSelectFormProps extends Omit<AppSelectProps, EType> {
  name: string;
  onClear?: () => void;
}