import { forwardRef } from 'react'
import { AppGrid } from 'components/basics/AppGrid'
import FormControl from '@mui/material/FormControl'
import RadioGroup from '@mui/material/RadioGroup'
import FormLabel from '@mui/material/FormLabel'
import FormControlLabel from '@mui/material/FormControlLabel'
import Tooltip from '@mui/material/Tooltip'
import { AppTextDescription } from '../AppTextDescription'
import CloseIcon from '@mui/icons-material/Close'
import { ClearButton, ErrorText, StyledRadio } from './AppRadio.styles'
import type { AppRadioProps } from './index.d'

const AppRadio = forwardRef<any, AppRadioProps>(({ defaultValue = '', label = '', value, error, helperText, options, description = '', clearable = false, onClear, ...props }, ref) => {
  return (
    <AppGrid container>
      <AppGrid
        container
        display='flex'
        flexWrap='nowrap'
      >
        <FormControl>
          <AppGrid display='flex' alignItems='center' gap={4}>
            <FormLabel>{label}</FormLabel>
            {clearable && <Tooltip title='clear'>
              <ClearButton onClick={onClear}>
                <CloseIcon scale={2} />
              </ClearButton>
            </Tooltip>}
          </AppGrid>
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
