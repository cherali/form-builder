import type { ReactNode, SetStateAction, Dispatch } from 'react'

export interface FormProviderProps {
  children: ReactNode;
}

export type MapFormData = Record<string, FormFieldProps>


export interface FormProviderContextProps {
  setForm: Dispatch<SetStateAction<Array<FormFieldProps>>>;
  form: Array<FormFieldProps>;
  clearForm: () => void;
  addField: (field: FormFieldProps) => void;
  mappedFormData: MapFormData;
  selectedItem?: FormFieldProps;
  setSelectedItem: (data?: FormFieldProps) => void;
  updateOrCreateField: (field: FormFieldProps, id: string) => void;
  prepareCreate: () => void;
}

export type FormProviderState = 'create' | 'edit'