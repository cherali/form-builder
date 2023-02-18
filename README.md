# Form Builder
Create from dynamically with Reactjs. save form automatically and able to define your own validation and formatter. also be able to change access to form. easily can change order of fields.

## Build with
+ ReactJs
+ MUI
+ React-hook-form
+ React-grid-layout
+ Typescript
+ Yup
+ ...

## Features
+ Provide diffrent component (text, select, date, check-box, radio, ...).
+ Auto-Save form and settings.
+ Able to see preview after edit / create field instantly.
+ Restrict Access to form with role, `default: admin`.
+ Validate and format fields.
+ Provides default validation / formatter.
+ Can add custom validation / formatter.
+ Using React-hook-form with Yup for validation.
+ Using localStorage to save form.
+ Drag / drop for changing field order.
+ Code-splitting.



## Note that
+ Access restricted by user role, It's hard-coded in `useUserRole` hooks, (see: `src/hooks/useUserRole`). For now 2 access level defined `user` and `admin`, And only `admin` can access and modify settings. If you wish to add more role or change which role can change settings go and modify this hook *(Remmember that in real world userRole fetched form api so you must change this).*

+ Form and settings auto-saved in localStorage with key `form-builder`. In case you messed up with settings you can deleted it and refresh page in order to set default settings (admin with full access, user with only read access). 

+ FormProvider (see: `src/providers/FormProvider`) is responsible for manage a form, for modify default settings check this file

+ Validation and format only avaliable for field with type text.

+ Phone validation format is set to (`xxx xxx-xxxx`) and without zero at start. but all phones not following this format and I suggest that to create new field type to handle phones.

+ Restriction can only be applied on View the Form, Edit field, Create Field and Delete Field (if Edit allowed, chnage order is enabled).

+ If you want to use phone validation you have to set formatter on phone too.

+ Access component use to add restrict access to a component. withAccess and Access both can be used.

+ html field send value text as value so for this field only name and value is important.

+ Using placeholder as label for check box, because for check box name and displayed text act diffrently.

+ In preview section after press submit, logging value if form is valid, else see errors.


## Install Packages
```bash
npm install

// or using yarn
yarn
```

## Run - Development
```bash
npm run start
// or using yarn
yarn start
```

## Build
```bash
npm run build

// or using yarn
yarn build
``` 