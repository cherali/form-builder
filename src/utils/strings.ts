import {
  string as yupString
} from 'yup'

const phoneRegExp = /^(\d{1,3})(\d{0,3})(\d{0,4})$/

export const getOptionFromString = (str: string) => str.split(',').map(option => {
  const splited = option.split('=')

  return ({ title: splited[0], value: splited[1] })
})

// formatter
export const commaSeperated = (value: string) => value.toString().replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ",")

export const removeCommas = (value: string) => value.replace(/,/g, '')

export const formatPhoneNumber = (value: string) => {
  let phone = (Number(value.slice(0, 1)) === 0 ? value.slice(1) : value).replace(/\D/g, '').slice(0, 10)
  const match = phone.match(phoneRegExp)
  if (match) {
    phone = `${match[1]}${match[2] ? ' ' : ''}${match[2]}${match[3] ? '-' : ''}${match[3]}`;
  }
  return phone
}

export const getPhoneValue = (value: string) => value.replace(/ /g, '').replace(/-/g, '')

// validation
export const validatePhone = () => yupString()
  .matches(phoneRegExp, 'Phone Format is wrong.')
  .max(10, 'Phone Format is wrong.')
  .min(10, 'Phone Format is wrong.')