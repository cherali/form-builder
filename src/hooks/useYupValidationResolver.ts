import { useCallback } from 'react'
import * as yup from 'yup'

interface useYupValidationResolverProps {
  [x: string]: any;
  validationSchema: yup.AnyObjectSchema;
}

function useYupValidationResolver(validationSchema: useYupValidationResolverProps) {
  return useCallback(async (data: any) => {
    try {
      const values = await validationSchema.validate(data, {
        abortEarly: false
      })

      return {
        values,
        errors: {}
      }
    } catch (errors: any) {
      return {
        values: {},
        errors: errors.inner.reduce((allErrors: any, currentError: any) => ({
          ...allErrors,
          [currentError.path]: {
            type: currentError.type ?? "validation",
            message: currentError.message
          }
        }), {})
      }
    }
  }, [validationSchema])
}

export default useYupValidationResolver