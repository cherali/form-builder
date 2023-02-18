import type { ReactNode, SetStateAction, Dispatch } from 'react'

export interface FormProviderProps {
  children: ReactNode;
}

export type MapFormData = Record<string, FormFieldProps>


export interface FormProviderContextProps {
  setForm: (data: Array<FormFieldProps>) => void;
  form: Array<FormFieldProps>;
  clearForm: () => void;
  addField: (field: FormFieldProps) => void;
  mappedFormData: MapFormData;
  selectedItem?: FormFieldProps;
  setSelectedItem: (data?: FormFieldProps) => void;
  updateOrCreateField: (field: FormFieldProps, id: string) => void;
  prepareCreate: () => void;
  settings: AccessLevel;
  setSettings: (data: AccessLevel) => void;
  hasAccess: (action: keyof AccessLevel, role?: UserAccessRoleType) => boolean;
}

export type FormProviderState = 'create' | 'edit'