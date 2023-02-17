import { forwardRef } from 'react'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import { StyledAppSelect } from './AppSelect.styles'
import type { AppSelectProps } from './index.d'

const AppSelect = forwardRef<any, AppSelectProps>(({
	options,
	value,
	onChange,
	...props
}, ref) => {

	return (
		<FormControl fullWidth>
			<StyledAppSelect
				select
				value={value}
				onChange={onChange}
				ref={ref}
				{...props}
			>
				{options.map((item, index) => (
					<MenuItem key={index} value={item.value} >{item.title}</MenuItem>
				))}
			</StyledAppSelect>
		</FormControl>
	)
})

export default AppSelect
