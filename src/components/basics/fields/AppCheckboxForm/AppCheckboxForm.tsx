import type { FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { AppCheckbox } from 'components/basics/AppCheckbox'
import type { AppCheckboxFormProps } from './index.d'


const AppCheckboxForm: FC<AppCheckboxFormProps> = ({ name, value = false, ...props }) => {
  const { control } = useFormContext()

  return (
    <Controller
      render={({ field, fieldState: { error } }) => (
        <AppCheckbox
          error={Boolean(error?.message)}
          helperText={error?.message}
          {...Object.assign({}, field, props)}
        />
      )}
      name={name}
      control={control}
    />
  )
}

export default AppCheckboxForm
