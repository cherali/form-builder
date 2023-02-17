import { CreateMUIStyled } from '@mui/material';
import type { ElementType, ReactNode } from 'react'
import type {
  SubmitHandler, UseFormReturn, Mode, FieldValues,
  UseFormSetValue, UseFormTrigger, UseFormClearErrors, UseFormGetFieldState, FormState, UseFormWatch,
} from 'react-hook-form'

type FormChildren = JSX.Element | JSX.Element[] | ReactNode;

export interface AppFormProps {
  onSubmit?: SubmitHandler;
  defaultValues?: any;
  validationSchema?: any;
  children: ((props: UseFormReturn<any, any>) => FormChildren);
  mode?: Mode;
}

export {
  UseFormSetValue as AppFormSetValue,
  UseFormTrigger as AppFormTrigger,
  UseFormClearErrors as AppFormClearErrors,
  UseFormGetFieldState as AppFormGetFieldState,
  FormState as AppFormState,
  UseFormWatch as AppFormWatch,
} 