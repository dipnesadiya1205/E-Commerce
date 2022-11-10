import { CircularProgress } from '@mui/material';
import styled from 'styled-components';
import { Theme } from '../../Theme/default';

type CircularProgressProps = {
  color?: string;
  height?: string;
  width?: string;
};

export const StyledCircularProgress: any = styled(CircularProgress)`
  color: ${(props: CircularProgressProps) =>
    props.color && Theme.colors.primary};
  height: ${(props: CircularProgressProps) => props.height};
  width: ${(props: CircularProgressProps) => props.width};
`;
