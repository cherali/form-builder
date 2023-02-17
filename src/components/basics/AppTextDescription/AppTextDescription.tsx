import type { FC } from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { AppText } from '../AppText'
import { AppGrid } from '../AppGrid'
import type { AppTextDescriptionProps } from './index.d'


const AppTextDescription: FC<AppTextDescriptionProps> = ({ children, ...rest }) => {

	return (
		<AppGrid alignItems='center' display='flex' color='grey' my={3} mx={2} gap={2}>
			<InfoOutlinedIcon />
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
