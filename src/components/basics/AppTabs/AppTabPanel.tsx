import type { FC } from 'react'
import { TabPanelProps } from './index.d'
import { AppPanelContainer } from './AppTabs.styles'

const AppTabPanel: FC<TabPanelProps> = ({ children, value, index, ...rest }) => {
  return (
    <AppPanelContainer
      role='tabpanel'
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...rest}
    >
      {value === index && children}
    </AppPanelContainer>
  )
}

export default AppTabPanel