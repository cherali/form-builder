import { FC, useEffect } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { AppSelect } from 'components/basics/AppSelect'
import type { AppSelectFormProps } from './index.d'


const AppSelectForm: FC<AppSelectFormProps> = ({ name, options, ...props }) => {
	const { control, setValue } = useFormContext()

	useEffect(() => props.defaultValue && setValue(name, props.defaultValue), [name, props.defaultValue, setValue])

	return (
		<Controller
			render={({ field, fieldState: { error, } }) => (
				<AppSelect
					error={Boolean(error?.message)}
					helperText={error?.message}
					options={options}
					{...Object.assign({}, field, props)}
				/>
			)}
			name={name}
			control={control}
		/>
	)
}

export default AppSelectForm
