import { styled } from 'theme'
import { AppTextField } from 'components/basics/AppTextField'
import { buttonBaseClasses } from '@mui/material/ButtonBase'

export const StyledAppSelect = styled(AppTextField)(({ }) => `
  & .MuiMenu-paper {
    background-color: red !important;
  }

  .${buttonBaseClasses.root} {
    position: absolute;
    right: 28px;
  }
`)