import { styled } from 'theme'
import Tabs, { tabsClasses } from '@mui/material/Tabs'

export const StyledAppTabs = styled(Tabs)(({ orientation }) => `
  ${orientation === 'horizontal' ? `
    border-bottom: 1px solid #0000001f;
  `: ''}

  ${orientation === 'vertical' ? `
    [dir='rtl'] & {
      border-left: 1px solid #0000001f;
    }
    [dir='ltr'] & {
      border-right: 1px solid #0000001f;
    }
  `: ''}
`)

export const AppTabsWrapper = styled('div')<{ orientation: string }>(({ orientation }) => `
  width: 100%;
  ${orientation === 'horizontal' ? `
    display: block;
  `: ''}

  ${orientation === 'vertical' ? `
    display: flex;
  `: ''}

  & .${tabsClasses.indicator} {
    [dir='rtl'] & {
      left: 0;
      right: auto;
    }
  }
`)

export const AppPanelContainer = styled('div')(({ theme: { spacing } }) => `
  width: 100%;
  margin: 0 ${spacing(3)};
`)
