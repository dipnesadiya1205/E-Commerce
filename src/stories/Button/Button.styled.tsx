import Button, { ButtonTypeMap } from '@mui/material/Button';
import { ExtendButtonBase } from '@mui/material/ButtonBase';
import styled, { StyledComponent } from 'styled-components';
import { Theme } from '../../Theme/default';

interface Props {
  height?: string;
  width?: string;
  primary?: boolean;
}

export const StyledButton: StyledComponent<
  ExtendButtonBase<ButtonTypeMap<{}, 'button'>>,
  any,
  Props,
  never
> = styled(Button)`
  &.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium {
    height: ${(props: Props) => props.height};
    width: ${(props: Props) => props.width};
    font: Bold 1rem Josefin Sans, sans-sarif;
    text-align: center;
    text-transform: none;
    letter-spacing: 1;
    ${(props: Props) =>
      props.primary
        ? {
            backgroundColor: Theme.colors.orangeColor,
            color: Theme.colors.blackColor,
            borderColor: `${Theme.colors.orangeColor1} ${Theme.colors.orangeColor2} ${Theme.colors.orangeColor3}`,
            borderRadius: 0,
          }
        : {
            backgroundColor: Theme.colors.grayColor,
            color: Theme.colors.blackColor,
            borderColor: `${Theme.colors.grayColor1} ${Theme.colors.grayColor2} ${Theme.colors.grayColor2}`,
            borderRadius: 0,
          }};
  }
`;
