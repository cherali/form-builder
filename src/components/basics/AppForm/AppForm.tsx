import type { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import useYupValidationResolver from 'hooks/useYupValidationResolver'
import type { AppFormProps } from './index.d'

const AppForm: FC<AppFormProps> = ({ children, onSubmit, defaultValues, validationSchema, mode = 'onSubmit' }) => {
  const resolver = useYupValidationResolver(validationSchema)
  const methods = useForm({ defaultValues, resolver, criteriaMode: 'all', mode })


  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {children(methods)}
      </form>
    </FormProvider>
  )
}

export default AppForm