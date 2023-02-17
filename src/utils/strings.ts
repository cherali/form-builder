export const getOptionFromString = (str: string) => str.split(',').map(option => {
  const splited = option.split('=')

  return ({ title: splited[0], value: splited[1] })
})