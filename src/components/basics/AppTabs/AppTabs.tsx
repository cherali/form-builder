import { FC, SyntheticEvent, useId, useState } from 'react'
import Tab from '@mui/material/Tab'

import AppTabPanel from './AppTabPanel'
import { AppTabsWrapper, StyledAppTabs } from './AppTabs.styles'
import type { AppTabsProps } from './index.d'


const AppTabs: FC<AppTabsProps> = ({
	orientation = 'horizontal',
	variant = 'standard',
	allowScrollButtonsMobile = true,
	tabs = [],
	activeTab = 0,
	...rest
}) => {
	const [activeIndex, setActiveIndex] = useState<number>(activeTab)

	const handleChange = (event: SyntheticEvent, newValue: number) => {
		setActiveIndex(newValue)
	}

	const a11yProps = (index: number) => ({
		id: `tab-${index}`,
		'aria-controls': `tabpanel-${index}`,
	})

	const id = useId()
	const TabContent = tabs[activeIndex].component

	return (
		<AppTabsWrapper
			orientation={orientation}
		>
			<StyledAppTabs
				allowScrollButtonsMobile={allowScrollButtonsMobile}
				orientation={orientation}
				variant={variant}
				value={activeIndex}
				onChange={handleChange}
				aria-label={`${orientation}-${variant}-tabs-${id}`}
				{...rest}
			>
				{tabs.map((tab, index) => (
					<Tab key={index} {...{ ...tab, component: undefined }} {...a11yProps(index)} />
				))}
			</StyledAppTabs>
			<AppTabPanel value={activeIndex} index={activeIndex}>
				<TabContent />
			</AppTabPanel>
		</AppTabsWrapper>
	)
}

export default AppTabs
