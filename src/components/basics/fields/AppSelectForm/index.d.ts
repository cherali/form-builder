import { AppSelectProps } from 'components/basics/AppSelect'

type EType = 'error' | 'value' | 'onChange' | 'onClear'

export interface AppSelectFormProps extends Omit<AppSelectProps, EType> {
  name: string;
  onClear?: () => void;
}