import type { ReactComponentElement, ReactNode } from 'react'
import type { TabsProps } from '@mui/material/Tabs'
import type { TabProps, TabTypeMap } from '@mui/material/Tab'

export type AppTabsItemProps = Array<TabProps & { component: ReactComponentElement }>

export interface AppTabsProps extends TabsProps {
  tabs: AppTabsItemProps;
  activeTab?: number;
}

export interface TabPanelProps {
  children?: ReactComponentElement;
  index: number;
  value: number;
}

export interface useAppTabsProps {
  activeTab: number;
}