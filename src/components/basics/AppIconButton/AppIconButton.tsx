import { forwardRef } from 'react'
import { StyledIconButton } from './AppIconButton.styles'
import type { AppIconButtonProps } from './index.d'


const AppIconButton = forwardRef<any, AppIconButtonProps>(({
  color = 'inherit',
  children,
  size,
  disableRipple = true,
  ...props
}, ref) => {

  return (
    <StyledIconButton
      disableRipple={disableRipple}
      size={size}
      color={color}
      aria-label='button'
      ref={ref}
      {...props}
    >
      {children}
    </StyledIconButton>
  )
})

export default AppIconButton
