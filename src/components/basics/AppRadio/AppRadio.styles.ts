import { styled } from 'theme'
import Radio from '@mui/material/Radio'
import { AppText } from 'components/basics/AppText'

export const StyledRadio = styled(Radio)(({ }) => `
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
