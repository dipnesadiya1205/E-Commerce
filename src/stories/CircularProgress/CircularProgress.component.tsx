import { StyledCircularProgress } from './CircularProgress.styled';

type CircularProgressProps = {
  color?: string;
  height?: string;
  width?: string;
  variant?: string;
  value?: number;
};

export const CircularProgress = ({
  color,
  height = '50px',
  width = '50px',
  variant = 'indeterminate',
  value,
}: CircularProgressProps) => {
  return (
    <StyledCircularProgress
      style={{ color, height, width }}
      variant={variant}
      value={value}
    />
  );
};
