import type { FC } from 'react'
import { UseFormSetValue } from 'react-hook-form'
import {
	object as yupObject,
	string as yupString,
} from 'yup'
import { Divider } from '@mui/material'
import { getFormDefaultValues } from 'utils/objects'
import { getOptionFromString } from 'utils/strings'
import { AppText } from 'components/basics/AppText'
import { AppForm } from 'components/basics/AppForm'
import { AppGrid } from 'components/basics/AppGrid'
import { AppButton } from 'components/basics/AppButton'
import { AppRadioForm } from 'components/basics/fields/AppRadioForm'
import { AppSelectForm } from 'components/basics/fields/AppSelectForm'
import { useFormProvider } from 'providers/FormProvider/useFormProvider'
import { AppCheckboxForm } from 'components/basics/fields/AppCheckboxForm'
import { AppTextFormField } from 'components/basics/fields/AppTextFormField'
import { AppDatepickerForm } from 'components/basics/fields/AppDatepickerForm'
import CloseIcon from '@mui/icons-material/Close'
import { CloseButton } from './InputSection.styles'
import { InputSectionProps } from './index.d'

const { FieldTypeObject } = require('types/global.d')


const InputSection: FC<InputSectionProps> = () => {
	const { selectedItem, setSelectedItem, updateOrCreateField } = useFormProvider()

	const handleCancelClick = () => {
		setSelectedItem(undefined)
	}

	const handleSubmit = (values: FormFieldProps) => {
		if (selectedItem) {
			updateOrCreateField(values, selectedItem.id)

			setSelectedItem(undefined)
		}
	}

	const validationSchema = yupObject({
		name: yupString().required('Name field is required.'),
		type: yupString().required('Type field is required.'),
		placeholder: yupString().required('Placeholder field is required.'),
	})

	const formatterOptions: Record<FieldTypeObject, FieldFormatterOptions> = {
		text: [
			{ title: '3-dig comma seperated', value: 'comma-3dig' },
			{ title: 'phone', value: 'phone' }

		],
		number: [],
		html: [],
		date: [],
		select: [],
		radio: [],
		'check-box': []
	}

	const validationOptions: Record<FieldTypeObject, FieldValidationOptions> = {
		text: [
			{ title: 'PHONE', value: 'phone' }
		],
		number: [],
		html: [],
		date: [],
		select: [],
		radio: [],
		'check-box': []
	}

	const hasOptions = (type: FieldType) => {
		if (type === 'radio' || type === 'select') {
			return true
		}
		return false
	}

	const getDefaultValueInput = (type: FieldType) => {
		switch (type) {
			case 'text':
				return AppTextFormField
			case 'date':
				return AppDatepickerForm
			case 'check-box':
				return AppCheckboxForm
			case 'radio':
				return AppRadioForm
			case 'select':
				return AppSelectForm
			case 'html':
				return () => <span></span>
			default:
				return AppTextFormField
		}
	}

	const getType = (type: FieldType) => {
		switch (type) {
			case 'number':
				return 'number'
			case 'html':
				return 'text'
			default:
				return 'text'
		}
	}

	const getOptions = (data: string, type: FieldType) => {
		if (type === 'select' || type === 'radio') {
			return getOptionFromString(data)
		}
		return []
	}

	const getDefaultValue = (type: FieldType, date: any) => {
		if (type === 'date') {
			return date
		}
		return undefined
	}

	const hasClear = (type: FieldType) => {
		switch (type) {
			case 'text':
				return false
			case 'html':
				return false
			case 'date':
				return false
			default:
				return true
		}
	}

	const getClearedValue = (type: FieldType) => {
		switch (type) {
			case 'radio':
				return ''
			case 'check-box':
				return ''
			default:
				return ''
		}
	}

	const getDefaultValueLabel = (type: FieldType) => {
		switch (type) {
			case 'select':
				return 'Default Option'
			case 'check-box':
				return 'Default Checked'
			case 'date':
				return 'Default Date'
			default:
				return 'Default Value'
		}
	}

	const getFormatter = (item: FormFieldProps) => {
		switch (item.type) {
			case 'text':
				return item.formatter

			default:
				return undefined
		}
	}

	const handleClearFieldClicked = (setValue: UseFormSetValue<any>, name: string, type: FieldType) => () => {
		setValue(name, getClearedValue(type))
	}

	const defaultValues = getFormDefaultValues(selectedItem, ['id'])

	return (
		<AppGrid>
			<AppText variant='h5'>Input:</AppText>

			<Divider />

			{!selectedItem && <AppText>Field not selected</AppText>}

			{selectedItem && <AppGrid marginTop={8} overflow='auto' height='80vh' py={4}>
				<AppForm defaultValues={defaultValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
					{({ getValues, setValue, trigger, formState: { isValid, isSubmitted } }) => {

						const RenderDefaultComponent = getDefaultValueInput(getValues('type'))

						const formatterOptionList = formatterOptions[getValues('type') as FieldTypeObject]
						const validationOptionList = validationOptions[getValues('type') as FieldTypeObject]

						const hasExtra = formatterOptionList.length > 0 || validationOptionList.length > 0

						return (
							<AppGrid display='flex' flexDirection='column' gap={6} mx={4}>
								<AppTextFormField
									name='name'
									label='name'
								/>

								<AppTextFormField
									name='placeholder'
									label='placeholder'
								/>

								<AppTextFormField
									name='description'
									label='description'
									multiline
									rows={4}
								/>

								<AppSelectForm
									label='type'
									name='type'

									options={Object.values(FieldTypeObject).map(item => ({ title: item, value: item }))}
									onChange={(e: FormChange) => {
										setValue('type', e.target.value, {
											shouldValidate: true,
										})
										setValue('options', '', {
											shouldValidate: true,

										})
										setValue('defaultOptionValue', '', {
											shouldValidate: true,
										})
									}}

								/>

								{hasOptions(getValues('type')) &&
									<AppGrid display='flex' gap={8}>

										<AppTextFormField
											name='options'
											label='Options'
											description='comma seperated name1=value1,name2=value2 pair. *no space after/before comma'
										/>

										<AppButton size='large' color='success' onClick={() => trigger()}>Update</AppButton>
									</AppGrid>
								}

								<AppGrid display='flex' gap={8}>
									<RenderDefaultComponent
										name='defaultOptionValue'
										label={getDefaultValueLabel(getValues('type'))}
										options={getOptions(getValues('options'), getValues('type'))}
										type={getType(getValues('type'))}
										defaultValue={getDefaultValue(getValues('type'), getValues('defaultOptionValue'))}
										formatter={getFormatter(getValues())}
									/>

									{hasClear(getValues('type')) && <AppButton size='large' color='warning' onClick={handleClearFieldClicked(setValue, 'defaultOptionValue', getValues('type'))}>Clear</AppButton>}
								</AppGrid>

								<AppGrid marginBottom={4}>
									<AppCheckboxForm
										name='isRequired'
										label='Required'
									/>
								</AppGrid>

								<Divider>
									Extra Options
								</Divider>

								{hasExtra && <AppGrid display='flex' flexDirection='column' gap={8}>
									{validationOptionList.length > 0 && <AppGrid display='flex' gap={4}>
										<AppSelectForm
											name='validation'
											label='Field Validation'
											options={validationOptionList}
											onChange={(e: FormChange) => {
												setValue('validation', e.target.value)
												trigger()
											}}
										/>

										<CloseButton
											size='large'
											color='error'
											onClick={() => {
												setValue('validation', '')
												trigger()
											}}
										>
											<CloseIcon />
										</CloseButton>
									</AppGrid>}

									{formatterOptionList.length > 0 && <AppGrid display='flex' gap={4}>
										<AppSelectForm
											name='formatter'
											label='Field Formatter'
											options={formatterOptionList}
											onChange={(e: FormChange) => {
												setValue('formatter', e.target.value)
												trigger()
											}}
										/>

										<CloseButton
											size='large'
											color='error'
											onClick={() => {
												setValue('formatter', '')
												trigger()
											}}
										>
											<CloseIcon />
										</CloseButton>
									</AppGrid>}
								</AppGrid>}

								<AppGrid marginTop={8} display='flex' flexDirection='column' gap={8}>
									<AppButton fullWidth variant='contained' color='primary' type='submit' disabled={!isValid && isSubmitted}>Update Field</AppButton>
									<AppButton fullWidth variant='outlined' color='error' onClick={handleCancelClick}>Cancel</AppButton>
								</AppGrid>
							</AppGrid>
						)
					}}
				</AppForm>
			</AppGrid>}
		</AppGrid>
	)
}

export default InputSection
