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

enum FieldValidation {
  'phone' = 'phone'
}

enum FieldFormatter {
  'comma-3dig' = 'comma-3dig',
  'phone' = 'phone'
}

declare type FieldValidationType = keyof typeof FieldValidation

declare type FieldFormatterType = keyof typeof FieldFormatter

declare interface FieldValidationObject {
  title: string;
  value: FieldValidationType;
}

declare interface FieldFormatterObject {
  title: string;
  value: FieldFormatterType;
}

declare type FieldValidationOptions = Array<FieldValidationObject>

declare type FieldFormatterOptions = Array<FieldFormatterObject>

declare type FormatterValueFn = (value: string) => string
declare type ValidationValueFn = StringSchema<string | undefined, AnyObject, undefined, "">

declare type FormChange = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>

declare interface FormFieldProps {
  id: string;
  name: string;
  type: FieldType;
  placeholder?: string;
  description?: string;
  isRequired?: boolean;
  options?: string;
  defaultOptionValue?: string | boolean;
  validation?: FieldValidationType;
  formatter?: FieldFormatterType;
}


module.exports = {
  FieldTypeObject,
  FieldValidation,
  FieldFormatter,
}