export const getFormDefaultValues = (data?: FormFieldProps, removeProperties?: Array<string>) =>
  data && Object.entries(data)
    .filter(r => removeProperties ? removeProperties.includes(r[0]) ? false : true : true)
    .reduce(((ac, cu) => ({ ...ac, [cu[0]]: cu[1] })), {})
