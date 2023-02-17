import {
  commaSeperated, removeCommas,
  formatPhoneNumber, getPhoneValue,
  validatePhone,
} from './strings'

export const getFormDefaultValues = (data?: FormFieldProps, removeProperties?: Array<string>) =>
  data && Object.entries(data)
    .filter(r => removeProperties ? removeProperties.includes(r[0]) ? false : true : true)
    .reduce(((ac, cu) => ({ ...ac, [cu[0]]: cu[1] })), {})


// formatter
export const formatterValueMapper: Record<FieldFormatter, FormatterValueFn> = {
  "comma-3dig": commaSeperated,
  "phone": formatPhoneNumber,
}

export const formatterOnChangeMapper: Record<FieldFormatter, FormatterValueFn> = {
  "comma-3dig": removeCommas,
  "phone": getPhoneValue,
}

// validation
export const validationObjects: Record<FieldValidation, ValidationValueFn> = {
  "phone": validatePhone,
}
