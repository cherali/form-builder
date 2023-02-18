import { forwardRef } from 'react'
import { AppGrid } from 'components/basics/AppGrid'
import { AppTextDescription } from '../AppTextDescription'
import { ClearButton, ErrorText, FormControlLabelCheckbox, StyledCheckbox } from './AppCheckbox.styles'
import Tooltip from '@mui/material/Tooltip'
import CloseIcon from '@mui/icons-material/Close'
import type { AppCheckboxProps } from './index.d'

const AppCheckbox = forwardRef<any, AppCheckboxProps>(({ children, defaultValue, value, onChange, onBlur, label, error, helperText, labelPlacement = 'end', description = '', onClear, clearable = false, ...props }, ref) => {
  return (
    <AppGrid container>
      <AppGrid
        container
        display='flex'
        alignItems='center'
        flexWrap='nowrap'
      >
        <AppGrid display='flex' alignItems='center' justifyContent='space-between' width='100%'>
          <FormControlLabelCheckbox
            className={Boolean(label) ? '' : 'hide-label'}
            checked={Boolean(value)}
            value={value}
            defaultValue={defaultValue}
            control={<StyledCheckbox
              ref={ref}
              onChange={onChange}
            />}
            label={label}
            labelPlacement={labelPlacement}
          />

          {clearable && <Tooltip title='Clear'>
            <ClearButton onClick={onClear}><CloseIcon /></ClearButton>
          </Tooltip>}
        </AppGrid>

        {children}
      </AppGrid>

      <AppGrid>
        {error && <ErrorText variant='body2' component='span'>{helperText}</ErrorText>}

        {description && <AppTextDescription>{description}</AppTextDescription>}
      </AppGrid>
    </AppGrid>

  )
})

export default AppCheckbox
