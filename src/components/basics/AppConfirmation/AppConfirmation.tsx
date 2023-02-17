import type { FC } from 'react'
import AppConfirmationBody from './AppConfirmationBody'
import { PaperContainer, StyledAppConfirmation } from './AppConfirmation.styles'
import { AppConfirmationProps, ConfirmationType, EvnetReason } from './index.d'

const AppConfirmation: FC<AppConfirmationProps> = ({ type = 'close', open, handleOpen, onConfirmed, msg }) => {

	const handleClose = (evt: Event, reason: EvnetReason) => {
		handleOpen(false)
	}

	const close = () => {
		handleOpen(false)
	}

	const handleConfirmed = () => {
		handleOpen(false)
		onConfirmed && onConfirmed()
	}

	return (
		<StyledAppConfirmation
			onClose={handleClose}
			open={open}
		>
			<PaperContainer>
				<AppConfirmationBody type={type} handleClose={close} handleConfirmed={handleConfirmed} msg={msg} />
			</PaperContainer>
		</StyledAppConfirmation>
	)
}

export default AppConfirmation
