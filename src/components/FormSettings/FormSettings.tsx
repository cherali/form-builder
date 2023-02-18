import type { FC } from 'react'
import {
	object as yupObject,
} from 'yup'
import Divider from '@mui/material/Divider'
import { useFormProvider } from 'providers/FormProvider/useFormProvider'
import { AppTextDescription } from 'components/basics/AppTextDescription'
import { AppGrid } from 'components/basics/AppGrid'
import { AppText } from 'components/basics/AppText'
import { AppForm } from 'components/basics/AppForm'
import { AppButton } from 'components/basics/AppButton'
import { AppCheckboxForm } from 'components/basics/fields/AppCheckboxForm'
import type { FormSettingsProps } from './index.d'

const { UserAccessRole, Actions } = require('types/global.d')

const MAP_TEXT: Record<ActionType, string> = {
	create: 'Create Field',
	update: 'Update Field',
	delete: 'Delete Field',
	read: 'Access to Form'
}


const FormSettings: FC<FormSettingsProps> = () => {
	const avaliableActions = Object.keys(Actions)
	const { hasAccess, setSettings, form } = useFormProvider()

	const validationSchema = yupObject({

	})

	const handleSubmit = (values: any) => {
		const settings: AccessLevel = {
			create: [],
			delete: [],
			update: [],
			read: [],
		}

		const entry = Object.entries(values)

		entry.forEach(e => {
			if (e[1]) {
				const accessor = e[0].split('-')
				const action = settings[accessor[1] as keyof AccessLevel]
				action.push(accessor[0] as UserAccessRoleType)
			}
		})
		setSettings(settings)
	}

	const roles = Object.keys(UserAccessRole) as Array<keyof AccessLevel>

	const defaultValues = roles
		.map(role => avaliableActions.map((action) => ({ [`${role}-${action}`]: hasAccess(action as keyof AccessLevel, role as UserAccessRoleType) })))
		.flat()
		.reduce(((ac, cu) => {
			const entry = Object.entries(cu)[0]
			return ({ ...ac, [entry[0]]: entry[1] })
		}), {})


	return (
		<AppGrid display='flex' flexDirection='column' gap={4} paddingTop={4}>
			<AppGrid>

				<AppTextDescription color='darkcyan'>Here you can change form settings.</AppTextDescription>
			</AppGrid>
			<AppGrid display='flex' flexDirection='column'>

				<AppForm onSubmit={handleSubmit} validationSchema={validationSchema} defaultValues={defaultValues}>
					{() => (
						<AppGrid>
							{
								roles.map((role, index) => (
									<AppGrid key={index} flex={1} marginTop={index === 0 ? 0 : 4}>
										<AppText fontWeight={900} textTransform='capitalize'>{role}:</AppText>
										<AppGrid display='flex' marginTop={4} marginBottom={8}>
											{avaliableActions.map((action, i) => (
												<AppGrid display='inline-flex' key={i}>
													<AppCheckboxForm
														name={`${role}-${action}`}
														label={MAP_TEXT[action as ActionType] || ''}
													/>
												</AppGrid>
											))}
										</AppGrid>

										{roles.length - 1 !== index && <Divider />}
									</AppGrid>
								))
							}

							<AppGrid marginTop={16} textAlign='end'>
								<AppButton type='submit'>Save</AppButton>
							</AppGrid>
						</AppGrid>
					)}
				</AppForm>
			</AppGrid>
		</AppGrid>
	)
}

export default FormSettings
