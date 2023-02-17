import type { FC } from 'react'
import { StyledIconButton } from './AppIconButton.styles'
import type { AppIconButtonProps } from './index.d'


const AppIconButton: FC<AppIconButtonProps> = ({
  color = 'inherit',
  children,
  size,
  disableRipple = true,
  ...props
}) => {

  return (
    <StyledIconButton
      disableRipple={disableRipple}
      size={size}
      color={color}
      aria-label='button'
      {...props}
    >
      {children}
    </StyledIconButton>
  );
};


export default AppIconButton
