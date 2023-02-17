import { styled } from 'theme'
import { AppTextField } from 'components/basics/AppTextField'

export const StyledAppSelect = styled(AppTextField)(({ }) => `
  & .MuiMenu-paper {
    background-color: red !important;
  }
`)