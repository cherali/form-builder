import type { FC } from 'react'
import { AppPopoverContainer } from './AppPopover.styles'
import type { AppPopoverProps } from './index.d'

const AppPopover: FC<AppPopoverProps> = ({ children, ...props }) => {

  return (
    <AppPopoverContainer
      {...props}
    >
      {children}
    </AppPopoverContainer>
  )
}

export default AppPopover
