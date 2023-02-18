import { createContext } from 'react'
import type { FormProviderContextProps } from './index.d'

const emptyFunction = () => { }

export const FormProviderContext = createContext<FormProviderContextProps>({
  clearForm: emptyFunction,
  addField: emptyFunction,
  setForm: emptyFunction,
  form: [],
  mappedFormData: {},
  setSelectedItem: emptyFunction,
  updateOrCreateField: emptyFunction,
  settings: {
    create: [],
    delete: [],
    read: [],
    update: [],
  },
  setSettings: emptyFunction,
  hasAccess: (value) => false,
  isEditing: () => false,
  setState: emptyFunction,
})
