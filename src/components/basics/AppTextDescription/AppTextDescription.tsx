import type { FC } from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { AppText } from '../AppText'
import { AppGrid } from '../AppGrid'
import type { AppTextDescriptionProps } from './index.d'


const AppTextDescription: FC<AppTextDescriptionProps> = ({ children, color = 'gray', ...rest }) => {

	return (
		<AppGrid alignItems='center' display='flex' color={color} my={3} mx={2} gap={2}>
			<AppGrid alignSelf='start'>
				<InfoOutlinedIcon />
			</AppGrid>
			<AppText
				variant='body2'
				component='span'
				{...rest}
			>
				{children}
			</AppText>
		</AppGrid>
	)
}

export default AppTextDescription
