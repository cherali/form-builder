import type { FC } from 'react'
import { AppGrid } from 'components/basics/AppGrid'
import type { AppHTMLTextProps } from './index.d'

const AppHTMLText: FC<AppHTMLTextProps> = ({ html }) => {
	// TODO: check if html is a valid dom
	return (
		<AppGrid dangerouslySetInnerHTML={{ __html: html }} />
	)
}

export default AppHTMLText
