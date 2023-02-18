import { FC, useState, useMemo, useEffect } from 'react'
import { FormProviderContext } from './FormProviderContext'
import type { FormProviderProps, MapFormData, FormProviderState } from './index.d'
import { getData, setData } from 'utils/storage'

const defaultSettings: AccessLevel = {
  read: ['admin', 'user'],
  create: ['admin'],
  delete: ['admin'],
  update: ['admin']
}


const FormProvider: FC<FormProviderProps> = ({ children }) => {
  const [form, setForm] = useState<Array<FormFieldProps>>([])

  const [selectedItem, setSelectedItem] = useState<FormFieldProps>()
  const [state, setState] = useState<FormProviderState>('edit')
  const [settings, setSettings] = useState<AccessLevel>(defaultSettings)

  const hasAccess = (action: keyof AccessLevel, defaultRole?: UserAccessRoleType) => {
    return settings[action]?.includes(defaultRole ?? 'user')
  }

  const mappedFormData = useMemo(() => {
    const obj: MapFormData = {}

    form.forEach(field => {
      obj[field.id] = field
    })

    return obj
  }, [form])


  const addField = (field: FormFieldProps) => setForm(s => [...s, field])

  const updateOrCreateField = (field: FormFieldProps, id: string) => {
    const newField = { ...field, id }
    if (state === 'edit') {
      setForm(s => {
        const newForm = s.map(item => item.id === id ? newField : item)
        setData({ form: newForm, settings })
        return newForm
      })
    } else if (state === 'create') {
      setForm(s => ([...s, newField]))
      setData({ form: [...form, newField], settings })
    }
  }

  const clearForm = () => {
    setForm([])
    setData({ form: [], settings: defaultSettings })
  }

  const handleSelecteItem = (data?: FormFieldProps) => {
    if (selectedItem) setSelectedItem(undefined)
    if (data) {
      setTimeout(() => {
        setSelectedItem(data)
      })
    }
  }

  useEffect(() => {
    const { form: formData, settings: settingsData } = getData()

    if (settingsData) {
      setSettings(settingsData)
    }

    if (formData) {
      setForm(formData)
    }

  }, [])

  const setFormAndSave = (data: Array<FormFieldProps>) => {
    setForm(data)
    setData({ form: data, settings })
  }

  const setSettingsAndSave = (data: AccessLevel) => {
    setSettings(data)
    setData({ form, settings: data })
  }

  const isEditing = () => state === 'edit'

  return (
    <FormProviderContext.Provider
      value={{
        form,
        setForm: setFormAndSave,
        addField,
        clearForm,
        mappedFormData,
        selectedItem,
        setSelectedItem: handleSelecteItem,
        updateOrCreateField,
        settings,
        setSettings: setSettingsAndSave,
        hasAccess,
        isEditing,
        setState,
      }}
    >
      {children}
    </FormProviderContext.Provider>
  )
}

export default FormProvider