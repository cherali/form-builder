import { FC, useState, useMemo } from 'react'
import { FormProviderContext } from './FormProviderContext'
import type { FormProviderProps, MapFormData, FormProviderState } from './index.d'

const FormProvider: FC<FormProviderProps> = ({ children }) => {
  const [form, setForm] = useState<Array<FormFieldProps>>([])

  const [selectedItem, setSelectedItem] = useState<FormFieldProps>()
  const [state, setState] = useState<FormProviderState>('edit')


  const mappedFormData = useMemo(() => {
    const obj: MapFormData = {}

    form.forEach(field => {
      obj[field.id] = field
    })

    return obj
  }, [form])


  const addField = (field: FormFieldProps) => setForm(s => [...s, field])

  const updateOrCreateField = (field: FormFieldProps, id: string) => {
    if (state === 'edit') {
      setForm(s => s.map(item => item.id === id ? { ...field, id } : item))
    } else if (state === 'create') {
      setForm(s => ([...s, { ...field, id }]))
      setState('edit')
    }
  }

  const clearForm = () => setForm([])

  const prepareCreate = () => setState('create')

  const handleSelecteItem = (data?: FormFieldProps) => {
    if (selectedItem) setSelectedItem(undefined)
    if (data) {
      setTimeout(() => {
        setSelectedItem(data)
      })
    }
  }

  return (
    <FormProviderContext.Provider
      value={{
        form,
        setForm,
        addField,
        clearForm,
        mappedFormData,
        selectedItem,
        setSelectedItem: handleSelecteItem,
        updateOrCreateField,
        prepareCreate,
      }}
    >
      {children}
    </FormProviderContext.Provider>
  )
}

export default FormProvider