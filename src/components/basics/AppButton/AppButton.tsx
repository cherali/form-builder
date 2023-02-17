import type { FC } from 'react'
import type { AppButtonProps } from './index.d'
import { StyledButton } from './AppButton.styles'


const AppButton: FC<AppButtonProps> = (
  ({
    variant = 'contained',
    size = 'medium',
    children,
    color,
    ...props
  }) => {

    return (
      <StyledButton
        color={color}
        variant={variant}
        size={size}
        {...props}
      >
        {children}
      </StyledButton>
    )
  }
)


AppButton.defaultProps = {
  color: 'primary'
}

export default AppButton
