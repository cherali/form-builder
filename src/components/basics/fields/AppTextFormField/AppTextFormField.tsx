import { FC, useCallback } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { AppTextField } from 'components/basics/AppTextField'
import { AppGrid } from 'components/basics/AppGrid'
import type { AppTextFormFieldProps } from './index.d'


const AppTextFormField: FC<AppTextFormFieldProps> = ({ name, ...props }) => {
  const { control, resetField } = useFormContext()

  const handleReset = useCallback(() => resetField(name), [name, resetField])

  return (
    <Controller
      render={({ field, fieldState: { error } }) => (
        <AppGrid container width='100%'>
          <AppTextField
            onClear={handleReset}
            error={Boolean(error?.message)}
            helperText={error?.message}
            {...Object.assign({}, field, props)}
          />
        </AppGrid>
      )}
      name={name}
      control={control}
    />
  )
}

export default AppTextFormField