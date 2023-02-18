import { FC, useMemo } from 'react'
import { AppText } from 'components/basics/AppText'
import type { AccessProps } from './index.d'

const AccessCmp = () => {
	return (
		<AppText fontWeight={900} variant='h5'>Access denied</AppText>
	)
}

const Access: FC<AccessProps> = ({ children, checkAccess, renderBlank = false }) => {
	return (
		<>
			{checkAccess() ? children : renderBlank ? <></> : <AccessCmp />}
		</>
	)
}

export const withAccess = (Cmp: any, checkAccess: () => boolean, renderBlank?: false) => () => {

	const isOk = useMemo(() => checkAccess(), [])

	if (isOk) {
		return <Cmp />
	} else if (renderBlank) {
		return <></>
	}

	return <AccessCmp />
}

export default Access
