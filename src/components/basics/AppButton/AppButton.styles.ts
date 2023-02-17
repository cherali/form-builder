import { styled } from 'theme'
import Button, { ButtonProps } from '@mui/material/Button'

export const StyledButton = styled(Button)<ButtonProps>(({ }) => `
  border-radius: 4px;
  text-transform: none;
  min-width: 85px;
`)
