import { forwardRef } from 'react'
import { AppGrid } from 'components/basics/AppGrid'
import type { AppRadioProps } from './index.d'
import { ErrorText, StyledRadio } from './AppRadio.styles'
import FormControl from '@mui/material/FormControl'
import RadioGroup from '@mui/material/RadioGroup'
import FormLabel from '@mui/material/FormLabel'
import FormControlLabel from '@mui/material/FormControlLabel'
import { AppTextDescription } from '../AppTextDescription'

const AppRadio = forwardRef<any, AppRadioProps>(({ defaultValue = '', label = '', value, error, helperText, options, description = '', ...props }, ref) => {
  return (
    <AppGrid container>
      <AppGrid
        container
        display='flex'
        flexWrap='nowrap'
      >
        <FormControl>
          <FormLabel>{label}</FormLabel>
          <RadioGroup
            className={Boolean(label) ? '' : 'hide-label'}
            ref={ref}
            {...props}
            defaultValue={defaultValue}
            value={value}
          >
            {options.map((item, index) => (
              <FormControlLabel key={index} value={item.value} control={<StyledRadio />} label={item.title} />
            ))}
          </RadioGroup>
        </FormControl>
      </AppGrid>

      <AppGrid>
        {error && <ErrorText variant='body2' component='span'>{helperText}</ErrorText>}

        {description && <AppTextDescription>{description}</AppTextDescription>}
      </AppGrid>

    </AppGrid>
  )
})

export default AppRadio
