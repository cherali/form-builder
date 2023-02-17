import type { MouseEventHandler } from 'react'

export type ConfirmationType = 'delete' | 'close'


export type EvnetReason = 'escapeKeyDown' | 'backdropClick'

export interface AppConfirmationProps {
  type?: ConfirmationType;
  open: boolean;
  handleOpen: (value: boolean) => void;
  onConfirmed?: () => void;
  msg?: string;
}

export interface useAppConfirmationProps {
  handleOpen: (value: boolean) => void;
  onConfirmed?: () => void;
}

export interface AppConfirmationBodyProps {
  type: ConfirmationType,
  handleClose: MouseEventHandler<HTMLButtonElement>,
  handleConfirmed?: MouseEventHandler<HTMLButtonElement>,
  msg?: string,
}

export type Variants = 'outlined' | 'contained' | 'text';

export type Colors = 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';