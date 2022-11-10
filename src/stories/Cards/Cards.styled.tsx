import {
  Card,
  CardContent,
  CardMedia,
  CardTypeMap,
  CardContentTypeMap,
  Typography,
  CardMediaTypeMap,
  TypographyTypeMap,
} from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import styled, { StyledComponent } from 'styled-components';
import { Theme } from '../../Theme/default';

type CardProps = {
  height?: string;
  width?: string;
};

type CardMediaProps = CardProps & {
  image?: string;
  alt?: string;
  component?: string;
};

type TypographyProps = {
  color?: string;
  component?: string;
  variant?: string;
};

export const StyledCard: StyledComponent<
  OverridableComponent<CardTypeMap<{}, 'div'>>,
  any,
  CardProps,
  never
> = styled(Card)`
  &.MuiCard-root {
    height: ${(props: CardProps) => props.height};
    width: ${(props: CardProps) => props.width};
    font: Bold 1rem Josefin Sans, sans-sarif;
    letter-spacing: 1;
    color: ${Theme.colors.blackColor};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

export const StyledCardMedia: StyledComponent<
  OverridableComponent<CardMediaTypeMap<{}, 'div'>>,
  any,
  CardMediaProps,
  never
> = styled(CardMedia)`
  &.MuiCardMedia-root.MuiCardMedia-media.MuiCardMedia-img {
    height: ${(props: CardMediaProps) => props.height};
    width: ${(props: CardMediaProps) => props.width}
    font: Bold 1rem Josefin Sans, sans-sarif;    
  }
`;

export const StyledCardContent: StyledComponent<
  OverridableComponent<CardContentTypeMap<{}, 'div'>>,
  any,
  {},
  never
> = styled(CardContent)`
  &.MuiCardContent-root {
    font: Regular 1rem Josefin Sans, sans-sarif;
  }
`;

export const StyledTypography: StyledComponent<
  OverridableComponent<TypographyTypeMap<{}, 'span'>>,
  any,
  TypographyProps,
  never
> = styled(Typography)`
  &.MuiTypography-root {
    font-family: Josefin Sans, sans-sarif;
    width: 100%;
    color: ${Theme.colors.blackColor};
    padding: 0;
  }

  &.MuiTypography-body2 {
    font-size: 1rem;
    font-weight: regular;
    color: ${Theme.colors.grayColor3};
  }

  &.MuiTypography-h4 {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: left;
    color: ${(props: TypographyProps) => props.color};
    cursor: pointer;
  }
`;
