import { StyledButton } from './Button.styled';

interface ButtonProps {
  primary?: boolean;
  height: string;
  width: string;
  label: string;
  handleClick?: () => void;
}

export const Button = ({
  primary,
  label,
  height,
  width,
  handleClick,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      style={{ height, width, ...props }}
      primary={primary}
      onClick={handleClick}
    >
      {label}
    </StyledButton>
  );
};
