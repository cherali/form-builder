import { useContext } from 'react'
import { FormProviderContext } from './FormProviderContext'
import type { FormProviderContextProps } from './index.d'

export const useFormProvider = (): FormProviderContextProps => useContext(FormProviderContext)
