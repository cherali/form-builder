import { styled } from 'theme'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import { inputBaseClasses } from '@mui/material/InputBase'
import { AppIconButton, AppIconButtonProps } from 'components/basics/AppIconButton'

export const StyledTextField = styled(TextField)<TextFieldProps | { hasError?: boolean }>(({ theme: { palette }, multiline }) => `
  p {
    text-align: start;
  }
  
  & input {
    &:-webkit-autofill {
      box-shadow: 0 0 0 100px #fff inset;
      -webkit-box-shadow: 0 0 0 100px #fff inset;
      -webkit-text-fill-color: #000 !important;
      border-radius: 0;
    };
  };
  
  & label {
    [dir='rtl'] & {
      right: 28px;
      left: auto;
      transform-origin: top right;
    };

    [dir='ltr'] & {
      right: 'auto';
      left: 0;
      transform-origin: top left;
    };
  };

  & fieldset {
    text-align: start;
  };


  ${multiline ? `
    & .${inputBaseClasses.root} {
      height: auto;
    }
  ` : ''}
`)


export const StyledActionButton = styled(AppIconButton)<AppIconButtonProps>(({ }) => `
  padding: 0;
  height: auto;
`)