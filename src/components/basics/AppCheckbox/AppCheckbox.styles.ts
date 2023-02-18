import { styled } from 'theme'
import FormControlLabel, { formControlLabelClasses } from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { AppText } from 'components/basics/AppText'
import { AppIconButton } from '../AppIconButton'

export const FormControlLabelCheckbox = styled(FormControlLabel)(({ }) => `
  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 0;
  };

  [dir='ltr'] & {
    margin-left: 0;
  };

  &.hide-label {
    [dir='ltr'] & {
      margin-right: 0;
    };
  };

  & .${formControlLabelClasses.label} {
    position: relative;
    top: 1px;
  }

`)
export const StyledCheckbox = styled(Checkbox)(({ }) => `
  padding-top: 0;
  padding-bottom: 0;
  
  [dir='rtl'] & {
    padding-right: 0;
  };

  [dir='ltr'] & {
    padding-left: 0;
  };
`)

export const ErrorText = styled(AppText)(({ theme: { palette, spacing } }) => `
  margin-top: ${spacing(1)};
  color: ${palette.error.main};
  font-weight: 500;
  padding: ${spacing(0, 3)};
`)

export const ClearButton = styled(AppIconButton)(({ }) => `
  padding: 0;
  height: 22px;
  color: grey;
  svg {
    width: 18px;
    height: 18px;
  }
`)