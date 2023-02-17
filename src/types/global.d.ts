enum FieldTypeObject {
  number = 'number',
  text = 'text',
  html = 'html',
  date = 'date',
  select = 'select',
  radio = 'radio',
  'check-box' = 'check-box'
}
declare type UserAccessRole = 'admin' | 'user'

declare type FieldType = keyof typeof FieldTypeObject

declare interface FieldAccessLevel {
  read: Array<UserAccessRole>;
  update: Array<UserAccessRole>;
  delete: Array<UserAccessRole>;
}


declare interface FormFieldProps {
  id: string;
  name: string;
  type: FieldType;
  placeholder?: string;
  description?: string;
  isRequired?: boolean;
  options?: string;
  defaultOptionValue?: string | boolean;
  validation?: (value: any) => boolean;
  formatter?: (value: any) => any;
}


module.exports = {
  FieldTypeObject
}