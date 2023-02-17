import { forwardRef } from 'react'
import { AppGrid } from 'components/basics/AppGrid'
import { AppTextDescription } from '../AppTextDescription'
import { ErrorText, FormControlLabelCheckbox, StyledCheckbox } from './AppCheckbox.styles'
import type { AppCheckboxProps } from './index.d'

const AppCheckbox = forwardRef<any, AppCheckboxProps>(({ children, defaultValue, value, onChange, onBlur, label, error, helperText, labelPlacement = 'end', description = '', ...props }, ref) => {
  return (
    <AppGrid container>
      <AppGrid
        container
        display='flex'
        alignItems='center'
        flexWrap='nowrap'
      >
        <FormControlLabelCheckbox
          className={Boolean(label) ? '' : 'hide-label'}
          checked={Boolean(value)}
          value={value}
          defaultValue={defaultValue}
          control={<StyledCheckbox
            ref={ref}
            onChange={(e: any) => onChange(Boolean(e.target.checked))}
          />}
          label={label}
          labelPlacement={labelPlacement}
        />
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
