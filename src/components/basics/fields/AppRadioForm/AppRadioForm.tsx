import type { FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { AppRadio } from 'components/basics/AppRadio'
import { AppRadioFormProps } from './index.d'


const AppRadioForm: FC<AppRadioFormProps> = ({ name, ...props }) => {
  const { control } = useFormContext()

  return (
    <Controller
      render={({ field, fieldState: { error } }) => (
        <AppRadio
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

export default AppRadioForm
