import { forwardRef, useCallback, useMemo, useState } from 'react'
import { InputProps } from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import { AppText } from '../AppText'
import { AppTextDescription } from '../AppTextDescription'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import CloseIcon from '@mui/icons-material/Close'
import { StyledActionButton, StyledTextField } from './AppTextField.styles'
import type { AppTextFieldProps } from './index.d'
import {
  formatterValueMapper, formatterOnChangeMapper,
} from 'utils/objects'

const emptyFunction = (value: any) => value

const AppTextField = forwardRef<any, AppTextFieldProps>(({
  label,
  helperText: helper,
  error,
  maxLength,
  rightPrefix,
  leftPrefix,
  InputProps: InputProperties,
  inputProps: inputProperties,
  className,
  onClear,
  size = 'small',
  disabled,
  variant = 'outlined',
  secure = false,
  defaultShowSecureValue = false,
  clearable = false,
  onChange,
  value = '',
  startIcon,
  textTransform,
  description,
  formatter,
  ...props
}, ref) => {
  const [showValue, setShowValue] = useState<boolean>(defaultShowSecureValue)

  const handleChangeSecure = useCallback(() => setShowValue(s => !s), [])

  const onChangeValue = useCallback((evt: any) => typeof textTransform !== 'undefined' ? textTransform(onChange, evt) : onChange && onChange(evt), [textTransform])

  const handleClear = useCallback(() => {
    onClear && onClear()
  }, [onClear])

  const valueLength = useMemo(() => `${value || ''}`.length, [value])

  const helperText = useMemo(() => (
    <>
      {error && <AppText variant='body2' component='span'>{helper}</AppText>}
      {maxLength && (
        <span>
          {Boolean(value) ? valueLength : 0}/{maxLength}
        </span>
      )}
    </>
  ), [error, helper, maxLength, valueLength, value])


  const TextInputProps: Partial<InputProps> = {
    endAdornment: (
      <InputAdornment sx={{ mx: 1, gap: 2 }} position='end'>
        {rightPrefix}

        {secure &&
          <StyledActionButton
            onClick={handleChangeSecure}
            disableRipple={false}
            tabIndex={-1}
          >
            {!showValue ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </StyledActionButton>
        }

        {(disabled || valueLength === 0 || !clearable) ? null : (
          <StyledActionButton
            onClick={handleClear}
            disableRipple={false}
            tabIndex={-1}
          >
            <CloseIcon />
          </StyledActionButton>
        )}

      </InputAdornment>
    ),
    startAdornment: (leftPrefix || startIcon) && (
      <InputAdornment sx={{ mx: 1, gap: 2 }} position='end'>
        {leftPrefix && leftPrefix}
        {startIcon && startIcon}
      </InputAdornment>
    ),
    ...InputProperties,
  }


  const _inputType = !showValue ? 'password' : 'text'



  // formatter
  const valueFormatter = formatter ? formatterValueMapper[formatter as FieldFormatter] : emptyFunction
  const onChangeFormatter = formatter ? formatterOnChangeMapper[formatter as FieldFormatter] : emptyFunction

  const handleChangeInput = (e: any) => {
    e.target.value = onChangeFormatter(e?.target?.value)
    onChangeValue(e)
  }

  return (
    <FormControl fullWidth size={size}>
      <StyledTextField
        label={label}
        helperText={helperText}
        size={size}
        className={className}
        type={secure ? _inputType : props.type}
        variant={variant}
        disabled={disabled}
        InputProps={TextInputProps}
        value={valueFormatter(value as any)}
        onChange={handleChangeInput}
        inputProps={inputProperties}
        error={error}
        ref={ref}
        {...props}
      />

      {description && <AppTextDescription>{description}</AppTextDescription>}

    </FormControl>
  )
})


export default AppTextField
