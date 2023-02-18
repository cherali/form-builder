const storageName = 'form-builder'

export const setData = (data: any) => localStorage.setItem(storageName, JSON.stringify(data))

export const getData = () => JSON.parse(localStorage.getItem(storageName) || '{}')

export const clearData = () => localStorage.removeItem(storageName)