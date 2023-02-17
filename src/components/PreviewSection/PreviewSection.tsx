import type { FC } from 'react'
import { Divider } from '@mui/material'
import { AppText } from 'components/basics/AppText'
import { AppGrid } from 'components/basics/AppGrid'
import { FormBuilder } from 'components/FormBuilder'
import type { PreviewSectionProps } from './index.d'


const PreviewSection: FC<PreviewSectionProps> = () => {
	return (
		<AppGrid>
			<AppText variant='h5'>Preview:</AppText>

			<Divider />

			<AppGrid marginTop={8} overflow='auto' height='80vh' px={2} py={4}>
				<FormBuilder />
			</AppGrid>

		</AppGrid>
	)
}

export default PreviewSection
