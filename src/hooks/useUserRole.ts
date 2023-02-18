import { useFormProvider } from 'providers/FormProvider/useFormProvider'

export const useUserRole = () => {
  const { hasAccess } = useFormProvider()

  const getUserRole = (): UserAccessRoleType => 'admin'

  const role = getUserRole()

  const canUpdate = () => hasAccess('update', role)
  const canDelete = () => hasAccess('delete', role)
  const canRead = () => hasAccess('read', role)
  const canCreate = () => hasAccess('create', role)

  const canModifyFormSettings = () => role === 'admin'

  return {
    role,
    canUpdate,
    canDelete,
    canRead,
    canCreate,
    canModifyFormSettings,
  }
}