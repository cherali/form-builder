import { FC, useEffect, useState } from 'react'
import {
	object as yupObject,
	string as yupString,
} from 'yup'
import { useFormProvider } from 'providers/FormProvider/useFormProvider'
import { getOptionFromString } from 'utils/strings'
import { getFormDefaultValues, validationObjects } from 'utils/objects'
import { AppButton } from 'components/basics/AppButton'
import { AppForm } from 'components/basics/AppForm'
import { AppGrid } from 'components/basics/AppGrid'
import { AppTextFormField } from 'components/basics/fields/AppTextFormField'
import { AppDatepickerForm } from 'components/basics/fields/AppDatepickerForm'
import { AppCheckboxForm } from 'components/basics/fields/AppCheckboxForm'
import { AppSelectForm } from 'components/basics/fields/AppSelectForm'
import { AppRadioForm } from 'components/basics/fields/AppRadioForm'
import { AppHTMLText } from 'components/basics/fields/AppHTMLText'
import { AppText } from 'components/basics/AppText'

import type { FormBuilderProps } from './index.d'


const FormBuilder: FC<FormBuilderProps> = () => {
	const { form, selectedItem } = useFormProvider()

	const [update, setUpdate] = useState(false)

	useEffect(() => {
		setUpdate(false)
		setTimeout(() => {
			setUpdate(true)
		})
	}, [selectedItem?.defaultOptionValue])

	const getValidator = (item: FormFieldProps) => {
		switch (item.type) {
			case 'text':
				return item.validation

			default:
				return undefined
		}
	}

	const validationSchema = yupObject({
		...form.filter(r => r.validation || r.isRequired).reduce(((ac, cu) => {
			const validator = cu.validation ? validationObjects[getValidator(cu) as FieldValidation] : () => yupString()
			const requireValidator = yupString().required(`${cu.name} field is required.`)
			return ({ ...ac, [cu.name]: yupString().concat(requireValidator).concat(validator()) })
		}), {})
	})

	const handleSubmit = (values: any) => {
		setTimeout(() => {
			// eslint-disable-next-line no-console
			console.log(values)
		})
	}


	const getComponent = (type?: FieldType) => {
		switch (type) {
			case 'text':
				return AppTextFormField
			case 'date':
				return AppDatepickerForm
			case 'check-box':
				return AppCheckboxForm
			case 'number':
				return AppTextFormField
			case 'radio':
				return AppRadioForm
			case 'select':
				return AppSelectForm

			case 'html':
				return AppHTMLText
			default:
				return AppTextFormField
		}
	}

	const getFieldOption = (item: FormFieldProps) => {
		if (item.type === 'select' || item.type === 'radio') {
			return getOptionFromString(item.options || '')

		} else {
			return undefined
		}
	}

	const getHtml = (item: FormFieldProps): string => {
		if (item.type === 'html') {
			return item.description || ''
		}

		return ''
	}

	const getValue = (item: FormFieldProps) => {
		switch (item.type) {
			case 'radio':
				return item.defaultOptionValue
			case 'select':
				return item.defaultOptionValue
			case 'check-box':
				return item.defaultOptionValue
			default:
				return item.defaultOptionValue
		}
	}

	const getDefaultValue = (item: FormFieldProps) => {
		switch (item.type) {
			case 'date':
				return item.defaultOptionValue
			case 'check-box':
				return undefined

			default: return undefined
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


	const defaultValues = form.map(item => getFormDefaultValues(item, ['id']))
		.reduce(((ac: any, cu: any) => ({ ...ac, [cu.name]: getValue(cu) })), {})

	return (
		<AppGrid>
			{form.length === 0 && <AppText>Form empty</AppText>}

			{form.length > 0 && update && <AppForm onSubmit={handleSubmit} defaultValues={defaultValues} validationSchema={validationSchema}>
				{() => (
					<AppGrid display='flex' flexDirection='column' gap={8}>
						{
							form.map(item => {
								const RenderComponent = getComponent(item.type)

								return (
									<AppGrid key={item.id}>
										<RenderComponent
											name={item.name}
											label={(item.isRequired ? '* ' : '') + (item.type === 'check-box' ? item.placeholder : item.name)}
											placeholder={item.placeholder}
											type={item.type}
											options={getFieldOption(item) as any}
											defaultValue={getDefaultValue(item) as any}
											html={getHtml(item)}
											description={item.description}
											formatter={getFormatter(item)}
										/>
									</AppGrid>
								)
							})
						}
						<AppButton type='submit'>submit</AppButton>
					</AppGrid>
				)}
			</AppForm>}
		</AppGrid>
	)
}

export default FormBuilder
