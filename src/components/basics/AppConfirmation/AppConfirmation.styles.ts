import { styled } from 'theme'
import { Dialog, Palette, Paper } from '@mui/material'
import { ConfirmationType } from './index.d'
import { AppButton } from '../AppButton'
import { AppGrid } from '../AppGrid'


const colorMap = (palette: Palette) => {
  return {
    close: palette.warning.dark,
    delete: palette.error.dark,
  }
}

export const StyledAppConfirmation = styled(Dialog)(({ }) => `
  background-color: transparent;
  box-shadow: 6px 0px 20px 0px #00000040;
  border-radius: 8px;
`)


export const PaperContainer = styled(Paper)(({ theme: { palette, spacing } }) => `
  background-color: ${palette.grey};
  padding: ${spacing(6)};
  width: 410px;
  height: 140px;
  border-radius: 8px;
`)

export const IconContainer = styled(AppGrid)<{ type: ConfirmationType }>(({ theme: { palette }, type }) => `
  border-width: 1px;
  border-style: solid;
  border-color: ${colorMap(palette)[type]};
  width: 40px;
  height: 40px;
  padding: 0;
  border-radius: 4px;
  color: ${colorMap(palette)[type]};
  background-color: ${colorMap(palette)[type]}20;
  &:hover {
    opacity: 0.8;
  }
`)

export const ConfirmationButton = styled(AppButton)(({ }) => `
  height: 38px;
`)
