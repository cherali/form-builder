import type { FC } from 'react'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { ConfirmationButton, IconContainer } from './AppConfirmation.styles'
import { AppGrid } from '../AppGrid'
import { AppText } from '../AppText'
import CloseIcon from '@mui/icons-material/Close'
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined'
import { AppConfirmationBodyProps, ConfirmationType, Colors, Variants } from './index.d'


const AppConfirmationBody: FC<AppConfirmationBodyProps> = ({ type, handleClose, handleConfirmed, msg }) => {
  const mapIcon: Record<ConfirmationType, OverridableComponent<any>> = {
    delete: CloseIcon,
    close: WarningAmberOutlinedIcon,
  }


  const mapButtonText: Record<ConfirmationType, string> = {
    close: 'Yes And Close',
    delete: 'Yes And Delete',
  }

  const colorMap: Record<ConfirmationType, Colors> = {
    close: 'primary',
    delete: 'error'
  }

  const primaryVariantMap: Record<ConfirmationType, Variants> = {
    close: 'contained',
    delete: 'outlined'
  }

  const secondaryVariantMap: Record<ConfirmationType, Variants> = {
    close: 'outlined',
    delete: 'contained'
  }

  const Icon = mapIcon[type]

  return (
    <>
      <AppGrid container alignItems='center' gap={4}>
        <IconContainer container justifyContent='center' alignItems='center' type={type}>
          <Icon />
        </IconContainer>
        <AppText variant='subtitle1'>{msg}</AppText>
      </AppGrid>

      <AppGrid container alignItems='center' justifyContent='flex-end' gap={4} marginTop={16}>
        <ConfirmationButton
          type='submit'
          variant={secondaryVariantMap[type]}
          color='primary'
          onClick={handleClose}
        >
          <span>cancel</span>
        </ConfirmationButton>

        <ConfirmationButton
          type='submit'
          variant={primaryVariantMap[type]}
          color={colorMap[type]}
          onClick={handleConfirmed}
        >
          <span>{mapButtonText[type]}</span>
        </ConfirmationButton>
      </AppGrid>
    </>
  )
}

export default AppConfirmationBody